import { Component } from '@angular/core';
import { Question, Test } from '../objects/Question';
import { TestsService } from '../services/test/tests.service';
import {  ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test-historial',
  templateUrl: './test-historial.component.html',
  styleUrl: './test-historial.component.scss'
})
export class TestHistorialComponent {
  TestContent: any[] = [];
  currentQuestionIndex: number = 0;
  selectedAnswer: string | null = null;
  userAnswers: Question[] = [];
 
  maxQuestions: number =30;
  maxQuestionsPerColumns: number = 20;
  columns : number = 0;
  revision: boolean = true;
  aprobado: boolean = null;
  correctos: number =0;

  constructor(private testService: TestsService, private route: ActivatedRoute) {
    this.columns =Math.ceil( this.maxQuestions/this.maxQuestionsPerColumns);   

  }

  ngOnInit(): void {
    const testId = this.route.snapshot.params['id'];
    this.TestContent = this.testService.findTest(testId);
    const test = this.testService.findUserTest(testId);
    this.userAnswers = test.questions;
    this.aprobado = test.aprobado;
    this.selectedAnswer = test.questions[0].answer;
    this.correctos = test.questions.filter(x=>x.correct==true).length;
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
        return (this.revision && userAnswer.correct!=null && !userAnswer.correct);
      }else
      {
        return false;
      }
  }
}
