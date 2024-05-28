import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.css'
})
export class TimerComponent {
  horas: number = 0;
  minutos: number = 0;
  segundos: number = 0;
  tiempoTotal: number = 0;
  tiempoRestante: string = '';
  intervalId: any;

  startTimer() {
    this.horas = Math.max(0, this.horas);
    this.minutos = Math.max(0, this.minutos);
    this.segundos = Math.max(0, this.segundos);

    this.tiempoTotal = (this.horas * 3600) + (this.minutos * 60) + this.segundos;

    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    this.intervalId = setInterval(() => {
      this.tiempoTotal--;
      if (this.tiempoTotal <= 0) {
        clearInterval(this.intervalId);
      }
      this.tiempoRestante = this.formatTiempo(this.tiempoTotal);
    }, 1000);
  }
resetTimer() {
    clearInterval(this.intervalId);
    this.horas = 0;
    this.minutos = 0;
    this.segundos = 0;
    this.tiempoTotal = 0;
    this.tiempoRestante = '';
  }

  formatTiempo(tiempo: number): string {
    const horas = Math.floor(tiempo / 3600);
    const minutos = Math.floor((tiempo % 3600) / 60);
    const segundos = tiempo % 60;
    return `${horas}:${minutos < 10 ? '0' : ''}${minutos}:${segundos < 10 ? '0' : ''}${segundos}`;
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  incrementarSegundos() {
    this.segundos++;
    this.segundos = Math.max(0, this.segundos); // Validación para evitar valores negativos
  }

  decrementarSegundos() {
    this.segundos--;
    this.segundos = Math.max(0, this.segundos); // Validación para evitar valores negativos
  }
  validarHoras() {
  this.horas = Math.max(0, this.horas);
}

validarMinutos() {
  this.minutos = Math.max(0, this.minutos);
}

validarSegundos() {
  this.segundos = Math.max(0, this.segundos);
}

}
