import { Component } from '@angular/core';
import { TestsService } from '../services/test/tests.service';
import { Test } from '../objects/Question';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrl: './historial.component.scss'
})
export class HistorialComponent {

  userTests: Test[]=[];
  constructor(private testService: TestsService)
  {
    this.userTests = testService.getUserTests();
     
  }

  imprimirResultado(resultado: boolean)
  {
    if(resultado)
      return "Aprobado";
    else
      return "Suspendido";
  }
}
