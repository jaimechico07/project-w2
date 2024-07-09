import { Component, OnInit  } from '@angular/core';
import { RouterLink } from '@angular/router'
import { CommonModule } from '@angular/common';
import {  getAuth, onAuthStateChanged } from '@angular/fire/auth';
import { IconsModule } from '../../icons/icons.module';
import { AuthService } from '../../auth/services/firebase/firebase-auth.services';

@Component({
  selector: 'app-pages-home',
  standalone: true,
  imports: [ RouterLink,CommonModule,IconsModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  isProfileVisible: boolean = false;
  userEmail: string | null = null;
  userDisplayName: string | null = null;
  userPhotoURL: string | null = null;
  hora: any;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user); // Verifica los datos del usuario en la consola
        this.userEmail = user.email?.split('@')[0] || '';
        this.userDisplayName = user.displayName;
        this.userPhotoURL = user.photoURL;
      } else {
        this.userEmail = null;
        this.userDisplayName = null;
        this.userPhotoURL = null;
      }
    });
    this.mostrarHora();
  }

  public mostrarHora() {
    this.hora = new Date().toLocaleDateString("es-ES");
    setInterval(() => {
      this.hora = new Date();
    }, 1000);
  }


  toggleProfileVisibility() {
    this.isProfileVisible = !this.isProfileVisible;
  }

  close(){
    if (window.confirm('¿Estás seguro de que quieres salir?')) {
      this.authService.logout();
    }
  }
}
