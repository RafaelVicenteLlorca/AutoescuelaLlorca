import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SingupComponent } from './singup/singup.component';
import { AuthGuard } from './auth.guard';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { HistorialComponent } from './historial/historial.component';
import { TestHistorialComponent } from './test-historial/test-historial.component';
import { TestNuevoComponent } from './test-nuevo/test-nuevo.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent },
  {path: 'signup', component: SingupComponent },
  {path: '', component: DashboardComponent, canActivate: [AuthGuard], children: [
    { path: '', redirectTo:'home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent},
    { path: 'about', component: AboutComponent},
    { path: 'stadistics', component: EstadisticasComponent},
    { path: 'record', component: HistorialComponent},
    { path: 'record/:id', component: TestHistorialComponent},
    { path: 'test/:nombre', component: TestNuevoComponent }

  ]},
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
