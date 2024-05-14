import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router'
import { BudgetComponent } from '../budget/budget.component';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-pages-home',
  standalone: true,
  imports: [RouterOutlet ,RouterLink, BudgetComponent,CommonModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
}
