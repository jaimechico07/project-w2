import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';//formulario
import { ButtonBudgetComponent } from '../../components/button-budget/button-budget.component';

import { IconsModule } from '../../icons/icons.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule,ButtonBudgetComponent,  IconsModule ],
  templateUrl: './mass-calculator.component.html',
  styleUrl: './mass-calculator.component.css'
})
export class MassCalculatorComponent {


  opcionSeleccionada: string = '';

  valor: number = 0;
  valorNum: number = 0;

  litros: number = 0;
  miliL: number = 0;
  tazas: number = 0;

  cantidad: number = 0;
  unidadOrigen: string = '';
  unidadDestino: string = '';
  resultado: number | null = 0;


  mostrarTexto() {

    switch (this.opcionSeleccionada) {
      case 'option1':
        this.litros = this.valor;
        this.miliL = this.valor * 1000;
        this.tazas = this.valor * 4.22675; // Corregido
        break;
      case 'option2':
        this.litros = this.valor / 1000;
        this.miliL = this.valor;
        this.tazas = this.valor * 0.00422675;
        break;
      case 'option3':
        this.litros = this.valor * 0.236588;
        this.miliL = this.valor * 236.588;
        this.tazas = this.valor;
        break;
      default:
        break;
    }
  }


  convertirUnidades(cantidad: number, unidadOrigen: string, unidadDestino: string): number {
    switch (unidadOrigen) {
      case 'taza':
        return this.convertirDesdeTaza(cantidad, unidadDestino);
      case 'onzas':
        return this.convertirDesdeOnzas(cantidad, unidadDestino);
      case 'cucharadas':
        return this.convertirDesdeCucharadas(cantidad, unidadDestino);
      case 'cucharaditas':
        return this.convertirDesdeCucharaditas(cantidad, unidadDestino);
      case 'gramos':
        return this.convertirDesdeGramos(cantidad, unidadDestino);
      default:
        return NaN; // Retornar NaN si la unidad de origen no es válida
    }
  }

  convertirDesdeTaza(cantidad: number, unidadDestino: string): number {
    switch (unidadDestino) {
      case 'onzas':
        return this.resultado = cantidad * 8;
      case 'cucharadas':
        return this.resultado = cantidad * 16;
      case 'cucharaditas':
        return this.resultado = cantidad * 48;
      case 'gramos':
        return this.resultado = cantidad * 236.588;
      default:
        return this.resultado = cantidad;
    }
  }

  convertirDesdeGramos(cantidad: number, unidadDestino: string): number {
    switch (unidadDestino) {
      case 'taza':
        return this.resultado = cantidad / 236.588;
      case 'onzas':
        return this.resultado = cantidad / 28.3495;
      case 'cucharadas':
        return this.resultado = cantidad / 14.7868;
      case 'cucharaditas':
        return this.resultado = cantidad / 4.92892;
      default:
        return this.resultado = cantidad;
    }
  }

  convertirDesdeOnzas(cantidad: number, unidadDestino: string): number {
    switch (unidadDestino) {
      case 'taza':
        return this.resultado = cantidad / 8;
      case 'cucharadas':
        return this.resultado = cantidad * 2;
      case 'cucharaditas':
        return this.resultado = cantidad * 6;
      case 'gramos':
        return this.resultado = cantidad * 28.3495;
      default:
        return this.resultado = cantidad;
    }
  }

  convertirDesdeCucharadas(cantidad: number, unidadDestino: string): number {
    switch (unidadDestino) {
      case 'taza':
        return this.resultado = cantidad / 16;
      case 'onzas':
        return this.resultado = cantidad / 2;
      case 'cucharaditas':
        return this.resultado = cantidad * 3;
      case 'gramos':
        return this.resultado = cantidad * 14.7868;
      default:
        return this.resultado = cantidad;
    }
  }

  convertirDesdeCucharaditas(cantidad: number, unidadDestino: string): number {
    switch (unidadDestino) {
      case 'taza':
        return this.resultado = cantidad / 48;
      case 'onzas':
        return this.resultado = cantidad / 6;
      case 'cucharadas':
        return this.resultado = cantidad / 3;
      case 'gramos':
        return this.resultado = cantidad * 4.92892;
      default:
        return this.resultado = cantidad;
    }
  }
}
