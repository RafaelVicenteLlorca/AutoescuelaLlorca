import { Route, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";
import { NgModule } from '@angular/core';
import { MainComponent } from "../main/main.component";

const routes: Route[] = [
    {
      path : 'dashboard',
      component: DashboardComponent,
      children: [
        {
          path: 'main',
          component: MainComponent
        },
      ]
    }
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class DashboardRoutingModule { }