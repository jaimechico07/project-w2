import { Component, inject, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

//genera pdf
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';

import { ButtonBudgetComponent } from '../../components/button-budget/button-budget.component';
import { ErrorMessageComponent } from '../../components/error-message/error-message.component';
//iconos
import { IconsModule } from '../../icons/icons.module';

interface Gasto {
  nombre: string;
  precio: number;
  descripcion?: string;
}

@Component({
  selector: 'app-budget-router',
  standalone: true,
  imports: [FormsModule, CommonModule, IconsModule, ButtonBudgetComponent, ErrorMessageComponent  ],
  templateUrl: './budget-router.component.html',
  styleUrls: ['./budget-router.component.css']
})
export class BudgetRouterComponent implements OnInit {

  gastos: Gasto[] = [];

  monto: number = 0;
  gasto: number = 0 ;
  nombreGasto: string = '';
  descripcionGasto: string = '';

  montoRestante: number = 0;
  gastoRealizado: number = 0;

  //mensajes de error
  addErrorMessage: string = '';
  editErrorMessage: string = '';

  //editar
  isEditing: boolean = false;
  editIndex: number | null = null;
  nombreGastoEdit: string = '';
  gastoEdit: number = 0;
  descripcionGastoEdit: string = '';

  route = inject(ActivatedRoute)

  ngOnInit(): void {
    this.monto = Number(this.route.snapshot.paramMap.get('monto'));
    this.montoRestante = this.monto;
  }

  restarGasto() {
    if (this.gasto > this.montoRestante) {
      this.addErrorMessage = 'No puede gastar más del presupuesto disponible.';
    } else if (this.gasto < 0) {
      this.addErrorMessage = 'El gasto debe ser mayor o igual que 0';
    } else if (this.nombreGasto.trim() === ''){
      this.addErrorMessage = 'El nombre no puede estar vacío.';
    } else {
      this.montoRestante -= this.gasto;
      this.gastoRealizado += this.gasto;
      this.gastos.push({ nombre: this.nombreGasto, precio: this.gasto, descripcion: this.descripcionGasto });
      this.gasto = 0;
      this.nombreGasto = '';
      this.descripcionGasto = '';
      this.addErrorMessage = '';
    }
  }

  actualizarGasto(index: number) {
    const gasto = this.gastos[index];
    this.editIndex = index;
    this.nombreGastoEdit = gasto.nombre;
    this.gastoEdit = gasto.precio;
    this.descripcionGastoEdit = gasto.descripcion || '';
    this.isEditing = true;
  }

  eliminarGasto(index: number) {
    const gastoEliminado = this.gastos.splice(index, 1)[0];
    this.montoRestante += gastoEliminado.precio;
    this.gastoRealizado -= gastoEliminado.precio
  }

  cancelarEdicion() {
    this.isEditing = false;
    this.editIndex = null;
    this.editErrorMessage = '';
  }

  guardarEdicion() {
    if (this.editIndex !== null && this.gastoEdit >= 0 && this.nombreGastoEdit.trim() !== '') {
      const gastoAnterior = this.gastos[this.editIndex];
      const diferencia = this.gastoEdit - gastoAnterior.precio;

      // Verificar si el nuevo gasto excede el presupuesto disponible
      if (diferencia > this.montoRestante) {
        this.editErrorMessage = '*No tiene suficiente presupuesto disponible para este gasto.';
        return;
      }

      const gastoActualizado: Gasto = {
        nombre: this.nombreGastoEdit,
        precio: this.gastoEdit,
        descripcion: this.descripcionGastoEdit
      };

      this.montoRestante += gastoAnterior.precio - this.gastoEdit;
      this.gastoRealizado += this.gastoEdit - gastoAnterior.precio;
      this.gastos[this.editIndex] = gastoActualizado;
      this.isEditing = false;
      this.editIndex = null;
      this.editErrorMessage = '';


    } else if (this.gastoEdit < 0)  {
      this.editErrorMessage = '*El gasto debe ser mayor que 0.';
    } else if (this.nombreGastoEdit.trim() == '') {
      this.editErrorMessage = '*El nombre no puede estar vacío.'
    }

  }

  // generarPDF() {
  //   const doc = new jsPDF();
  //   const tableData: any[][] = [];
  //   const headers = ['Nombre', 'Precio', 'Descripción'];

  //   this.gastos.forEach(gasto => {
  //     const rowData = [
  //       gasto.nombre,
  //       gasto.precio.toString(),
  //       gasto.descripcion || ''
  //     ];
  //     tableData.push(rowData);
  //   });


  //   doc.text(`Monto inicial: S/ ${this.monto}`, 10, 10);
  //   doc.text(`Gasto realizado: S/ ${this.gastoRealizado}`, 10, 20);
  //   doc.text(`Monto restante: S/ ${this.montoRestante}`, 10, 30);

  //   autoTable(doc, {
  //     head: [headers],
  //     body: tableData,
  //     startY: 40
  //   });

  //   doc.save('presupuesto.pdf');
  // }

}
