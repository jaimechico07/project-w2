import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';//formulario


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './mass-calculator.component.html',
  styleUrl: './mass-calculator.component.css'
})
export class MassCalculatorComponent {

  public mostrarL: boolean = false;
  public mensaje: string = "MOSTRAR";

  public opcionSeleccionada: string = '';

  public valor: string = '';
  public valorNum: number = 0;

  public litros: number = 0;
  public miliL: number = 0;
  public tazas: number = 0;


  mostrarTexto() {

    this.valorNum = parseFloat(this.valor)

    console.log("hola desde mostrar texto esta es la ", this.opcionSeleccionada)

    switch (this.opcionSeleccionada) {

      case 'option1':
        this.mostrarMedidas();
        this.litros = this.valorNum;
        this.miliL = this.valorNum * 1000;
        this.tazas = this.valorNum * 4, 22675;
        break;
      case 'option2':
        this.mostrarMedidas();
        this.litros = this.valorNum / 1000;
        this.miliL = this.valorNum;
        this.tazas = this.valorNum * 0.00422675;
        break;

      case 'option3':
        this.mostrarMedidas();
        this.litros = this.valorNum * 0.236588;
        this.miliL = this.valorNum * 236.588;
        this.tazas = this.valorNum;
        break;

      default:
        break;
    }

  }

  mostrarMedidas() {
    if (this.mostrarL) {
      this.mostrarL = false;
    } else {
      this.mostrarL = true;
    }
  }

  cambiarTexto() {
    if (this.mensaje === "MOSTRAR") {
      this.mensaje = "OCULTAR";
    } else {
      this.mensaje = "MOSTRAR";
    }
  }
  cambiarDatos() {

    this.litros = 10;
    this.miliL = 15;
    this.tazas = 20;
  }

}
