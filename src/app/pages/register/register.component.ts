import { Component } from '@angular/core';
import { AuthService } from '../../auth/services/firebase/firebase-auth.services';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,CommonModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  email: string = '';
  password: string = '';
  displayName: string = '';
  photoFile: File | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  onFileSelected(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
      this.photoFile = target.files[0];
    }
  }

  async onSubmit() {
    try {
      await this.authService.register(this.email, this.password, this.displayName, this.photoFile);
      this.router.navigate(['/login']);
    } catch (error) {
      console.error('Registration error: ', error);
    }
  }
}
