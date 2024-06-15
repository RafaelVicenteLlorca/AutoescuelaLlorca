import { Component } from '@angular/core';
import { TestsService } from '../services/test/tests.service';
import { Question, Test } from '../objects/Question';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test-nuevo',
  templateUrl: './test-nuevo.component.html',
  styleUrl: './test-nuevo.component.scss'
})
export class TestNuevoComponent {
  TestContent: any[] = [];
  currentQuestionIndex: number = 0;
  selectedAnswer: string | null = null;
  userAnswers: Question[] = [];
 
  maxQuestions: number =30;
  maxQuestionsPerColumns: number = 20;
  columns : number = 0;
  revision: boolean = false;
  aprobado: boolean = null;
  correctos: number =0;

  constructor(private testService: TestsService, private route: ActivatedRoute) {
    this.columns =Math.ceil( this.maxQuestions/this.maxQuestionsPerColumns);   

  }

  ngOnInit(): void {
    const tipo = this.route.snapshot.params['nombre'];
    this.testService.selectTipeTest(tipo);
    this.TestContent = this.testService.getXRandomQuestions(this.maxQuestions);
    var i = this.currentQuestionIndex;
    this.TestContent.forEach((item) => {
      this.userAnswers.push({
        question: item.pregunta,
        questionId: item.questionId,
        correct: null,
        answer: null,
        index: i
      });
      i++;
    });
  }

  nextQuestion() {
    if (this.currentQuestionIndex < this.maxQuestions - 1) {
      this.currentQuestionIndex++;
      const userAnswer = this.userAnswers.find(answer => answer.index === this.currentQuestionIndex);
      if (userAnswer) {
          this.selectedAnswer = userAnswer.answer;
      } else {
          this.selectedAnswer = null;  
      }
    }  
  }

  previousQuestion() {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
      const userAnswer = this.userAnswers.find(answer => answer.index === this.currentQuestionIndex);
      if (userAnswer) {
          this.selectedAnswer = userAnswer.answer;
      } else {
          this.selectedAnswer = null;  
      }
    }
  }

  revisar(){
    this.currentQuestionIndex = 0;
    this.revision = true;
    const userAnswer = this.userAnswers.find(answer => answer.index === this.currentQuestionIndex);
    if (userAnswer) {
        this.selectedAnswer = userAnswer.answer;
    } else {
        this.selectedAnswer = null;  
    } 
    this.correctos = this.userAnswers.filter(answer => answer.correct).length;
    if(this.maxQuestions - this.correctos>3)
      {
        this.aprobado = false;
      }else
      {
        this.aprobado = true;
      }
    var test:Test= {
      questions: [],
      aprobado:this.aprobado,
      tipo: this.route.snapshot.params['nombre']
    };  
 
    test.questions = this.userAnswers;
    this.testService.saveUserTest(test);
  }
 
  setCurrentQuestion(index : number)
  {
    if (index >= 0 && index<=this.maxQuestions) {
      this.currentQuestionIndex=index;
      this.selectedAnswer = null;
      const userAnswer = this.userAnswers.find(answer => answer.index === this.currentQuestionIndex);
      if (userAnswer) {
          this.selectedAnswer = userAnswer.answer;
      } else {
          this.selectedAnswer = null;  
      } 
    }
  }

  selectAnswer(answer: string) {
 
    const currentQuestion = this.TestContent[this.currentQuestionIndex];
      
    const isCorrect = currentQuestion.correcta[this.getAnswerIndex(answer)] === '1';
     
   
    const userAnswer = this.userAnswers.find(answer => answer.index === this.currentQuestionIndex);
      if (userAnswer) {  
            userAnswer.answer= answer;
            userAnswer.correct = isCorrect;
      } else {
            this.userAnswers.push({ 
              question: currentQuestion.pregunta, 
              answer: answer, 
              correct: isCorrect ,
              index: this.currentQuestionIndex,
              questionId: currentQuestion.questionId
            });
      }           
      this.selectedAnswer = answer;
    }

  private getAnswerIndex(answer: string): number {
    return ['a', 'b', 'c'].indexOf(answer);
  }

  printAnswerValue(answer: any)
  {
    const parts = answer.correcta.split(' '); // Dividir la cadena en un array de strings
  
  if (parts[0] === '1') {
    return 'a';
  } else if (parts[1] === '1') {
    return 'b';
  } else if (parts[2] === '1') {
    return 'c';
  } else {
    throw new Error('Formato incorrecto o no se encontró un valor de 1');
  }
  }

  isCorrect( index:number)
  {
    const userAnswer = this.userAnswers.find(answer => answer.index === index);
    if(userAnswer)
      {
        return (this.revision && userAnswer.correct);
      }else
      {
        return false;
      }
  }

  isInCorrect(index: number)
  {
    const userAnswer = this.userAnswers.find(answer => answer.index === index);
     
    if(userAnswer)
      {
        return (this.revision && userAnswer.correct!=null &&!userAnswer.correct);
      }else
      {
        return false;
      }
  }
}
