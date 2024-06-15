import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MainComponent } from '../main/main.component';
import { BrowserModule } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatNavList } from '@angular/material/list';



@NgModule({
  declarations: [
    DashboardComponent,
 
  ],
  imports: [
    BrowserModule,
    DashboardRoutingModule,
    MatSidenavModule,
    MatIconModule,
    MatDividerModule,
    MatNavList
  ],
})
export class DashboardModule { }
