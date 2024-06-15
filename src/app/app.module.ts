import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { AboutComponent } from './about/about.component';
import { DashboardModule } from './dashboard/dashboard.module';

 
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LoginComponent } from './login/login.component';
import { SingupComponent } from './singup/singup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './main/main.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { HistorialComponent } from './historial/historial.component';
import { TestHistorialComponent } from './test-historial/test-historial.component';
import { TestNuevoComponent } from './test-nuevo/test-nuevo.component';
 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    SingupComponent,
    MainComponent,
    EstadisticasComponent,
    HistorialComponent,
    TestHistorialComponent,
    TestNuevoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    DashboardModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
     
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
