import { Component, OnInit } from '@angular/core';
import { Chart, ChartType, registerables } from 'chart.js'; 
import { TestsService } from '../services/test/tests.service';
import { Test } from '../objects/Question';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.scss']
})
export class EstadisticasComponent implements OnInit {
   public chart: Chart; 
   public tests: Test[];
   
   constructor(private testService: TestsService) {
     this.tests = testService.getUserTests();
   }

   ngOnInit(): void {
     // Registrar todos los componentes de Chart.js
     Chart.register(...registerables);

     const colors = [
       'rgba(255, 99, 132, 0.2)', // Red
       'rgba(54, 162, 235, 0.2)', // Blue
       'rgba(255, 206, 86, 0.2)', // Yellow
       'rgba(75, 192, 192, 0.2)', // Green
       'rgba(153, 102, 255, 0.2)', // Purple
       'rgba(255, 159, 64, 0.2)'  // Orange
     ];
     const borderColors = [
       'rgb(255, 99, 132)',
       'rgb(54, 162, 235)',
       'rgb(255, 206, 86)',
       'rgb(75, 192, 192)',
       'rgb(153, 102, 255)',
       'rgb(255, 159, 64)'
     ];
    
     var labels: string[] = [];  
     var fallos: number[] = [];
     var i = 0;
     
     this.tests.forEach(element => {
       labels.push('Test' + element.tipo + ' ' + i);
       fallos.push(element.questions.filter(x => x.correct != true).length);
       i++;
     });

     const backgroundColors = fallos.map((_, index) => colors[index % colors.length]);
     const borderColor = fallos.map((_, index) => borderColors[index % borderColors.length]);

     const data = {
       labels: labels,
       datasets: [{
         label: 'Progreso del usuario',
         data: fallos,
         backgroundColor: backgroundColors,
         borderColor: borderColor,
         borderWidth: 1
       }]
     };

     this.chart = new Chart("chart", {
       type: 'bar' as ChartType, // tipo de la gráfica 
       data: data // datos 
     });
   }
}
