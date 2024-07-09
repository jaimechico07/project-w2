import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../auth/services/firebase/firebase-auth.services';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonBudgetComponent } from '../../components/button-budget/button-budget.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, ButtonBudgetComponent, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  login() {
    this.authService.login(this.email, this.password);
  }

  googleLogin() {
    this.authService.googleLogin();
  }

}
