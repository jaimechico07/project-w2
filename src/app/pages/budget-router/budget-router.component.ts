import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-budget-router',
  standalone: true,
  imports: [ FormsModule,CommonModule],
  templateUrl: './budget-router.component.html',
  styleUrl: './budget-router.component.css'
})
export class BudgetRouterComponent implements OnInit {

  route = inject(ActivatedRoute) // acceder a los datos de la navegacion

  monto: number = 0;
  gasto: number = 0;
  montoRestante: number = 0;
  errorMessage: string = '';

  // constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.monto = Number(this.route.snapshot.paramMap.get('monto'));

    this.montoRestante = this.monto;
  }

  restarGasto() {
    if (this.gasto > this.montoRestante) {
      this.errorMessage = 'No puede gastar más del presupuesto disponible.';
    } else {
      this.montoRestante -= this.gasto;
      this.gasto = 0; // Reiniciar el campo de gasto
      this.errorMessage = ''; // Limpiar el mensaje de error si la operación es válida
    }
  }

}
