import { HttpClient } from '@angular/common/http';
import { Injectable, numberAttribute } from '@angular/core';
import {data_A1} from '../../shared/test/data_A1/data_A1';
import {data_B} from '../../shared/test/data_B/data_B';
import { Question, Test } from '../../objects/Question';
@Injectable({
  providedIn: 'root'
})
export class TestsService {
  public TestContent = data_A1;
  
  private storageKey = 'userTests';

  constructor() { }

  selectTipeTest(tipe:string){
    console.log(tipe);
    if(tipe == "Moto")
      this.TestContent = data_A1;
    else
      this.TestContent = data_B;
  }

  saveUserTest(newTest: Test): void {
   
    var storedTests = this.getUserTests();

    storedTests.push( newTest);

    localStorage.setItem(this.storageKey, JSON.stringify(storedTests));
  }

  getUserTests(): Test[] {
    
    const data = localStorage.getItem(this.storageKey);    
     
    if (data === null) {
      return [];
    }

    return JSON.parse(data);
  }

  public getRandomQuestion(): any {
    let randomIndex : number = Math.floor(Math.random() * this.TestContent.length);
    return this.TestContent[randomIndex];
  }

  public getXRandomQuestions(tam: number): any {
    const preguntas = tam;
    let randomQuestions: any[] = [];
    var escogidas: number[] = [];
    var i = 0;
    do{
     
      var num = Math.floor(Math.random() * (this.TestContent.length + 1));
      if (!escogidas.includes(num))
        {
          escogidas.push(num);
          let randomquestion = this.TestContent[num];
          randomquestion.questionId = num;
          randomQuestions.push(randomquestion);
          i++;
        }
         
    }while(i<preguntas)
       
    return randomQuestions;
  }

  public findTest(idTest: number)
  {
    const test = this.getUserTests()[idTest];
    const idQuestions = test.questions.map(question => question.questionId);
    this.selectTipeTest(test.tipo);
    return this.findQuestions(idQuestions);
  }

  public findUserTest(idTest: number): Test
  {
    
    return this.getUserTests()[idTest];
  }

  public findQuestions(indices: number[]): any
  {
    let Questions: any[]=[];
  
    indices.forEach(num => {
      let randomquestion = this.TestContent[num];
      randomquestion.questionId = num;
      Questions.push(randomquestion);
    });
    return Questions;
  }

  public getTestContent(): any {

    console.log(this.TestContent)
    return this.TestContent;
  }
}
