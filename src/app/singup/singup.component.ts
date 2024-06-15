import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrl: './singup.component.scss'
})
export class SingupComponent {
  signupForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router ) {
    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      if (this.signupForm.value.password === this.signupForm.value.confirmPassword) {
        this.authService.register(this.signupForm.value.email, this.signupForm.value.password);
        console.log('User registered successfully');
        this.router.navigate(['/login'])
      } else {
        console.error('Passwords do not match!');
      }
    }
  }
}
