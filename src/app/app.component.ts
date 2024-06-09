import { Component , OnInit} from '@angular/core';
import { AuthService } from '../service/auth.services';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ButtonFloatingComponent } from './components/button-floating/button-floating.component';
import { initFlowbite } from 'flowbite';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NotFoundComponent,ButtonFloatingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  title = 'my-project-w2';

  constructor(private authService: AuthService) { }
  ngOnInit(): void {
    initFlowbite();
    if (!this.authService.getTokenFromLocalStorage()) {
      this.authService.login();
    }
  }

}
