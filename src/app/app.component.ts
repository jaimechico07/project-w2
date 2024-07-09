import { Component , OnInit} from '@angular/core';
import { AuthService } from './auth/services/spotify/spotify-auth.services';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ButtonFloatingComponent } from './components/button-floating/button-floating.component';
import { initFlowbite } from 'flowbite';
import { Router, Event, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NotFoundComponent,ButtonFloatingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  title = 'my-project-w2';
  showButtonFloating: boolean = true;
  private hiddenRoutes: string[] = ['/login', '/register', '/home'];

  constructor(private authService: AuthService, private router: Router) {
    this.router.events.pipe(
      filter((event: Event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.checkRoute(event.urlAfterRedirects);
    });
  }
  ngOnInit(): void {
    initFlowbite();
    if (!this.authService.getTokenFromLocalStorage()) {
      this.authService.login();
    }
  }

  private checkRoute(url: string) {
    this.showButtonFloating = !this.hiddenRoutes.some(route => url.includes(route));
  }

}
