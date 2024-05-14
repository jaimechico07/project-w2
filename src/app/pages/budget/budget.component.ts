import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { Router } from '@angular/router';


@Component({
  selector: 'app-pages-budget',
  standalone: true,
  imports: [ CommonModule, FormsModule],
  templateUrl: './budget.component.html',
  styleUrl: './budget.component.css'
})
export class BudgetComponent {
  monto: number = 0;

  router = inject(Router) // Injeccion de dependencia

  // constructor(private router: Router) {}

  onSubmit() {
    // Redirigir a la página de gastos
    this.router.navigate(['/BudgetRouterComponent', this.monto]);
  }
}
