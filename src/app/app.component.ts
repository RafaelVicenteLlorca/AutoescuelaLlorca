import { Component } from '@angular/core';
import { UsuarioService } from './services/usuario/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'AutoescuelaLlorca';
  constructor(private userService: UsuarioService, private router: Router) {}
  ngOnInit() {
  /*
    if (!this.userService.isLoggedIn()) {
      this.router.navigate(['/login']);
    }
    */
  }

  navegarAnterior() {
    window.history.back();
  }
}
