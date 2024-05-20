import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { Router } from '@angular/router';
import { ButtonBudgetComponent } from '../../components/button-budget/button-budget.component';


@Component({
  selector: 'app-pages-budget',
  standalone: true,
  imports: [ CommonModule, FormsModule, ButtonBudgetComponent],
  templateUrl: './budget.component.html',
  styleUrl: './budget.component.css'
})
export class BudgetComponent {
  monto: number = 0;

  router = inject(Router)


  onSubmit() {
    this.monto <= 0 ? '[disabled]=monto <= 0' : this.router.navigate(['/BudgetRouterComponent', this.monto]);

  }
}
