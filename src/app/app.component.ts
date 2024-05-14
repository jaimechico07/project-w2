import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterLink} from '@angular/router'
import { HomeComponent } from './pages/home/home.component';
import { BudgetComponent } from './pages/budget/budget.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink,HomeComponent, BudgetComponent, NotFoundComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-project-w2';
}
