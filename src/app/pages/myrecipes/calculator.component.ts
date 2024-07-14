import { Component } from '@angular/core';
import { IconsModule } from '../../icons/icons.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Receta {
  titulo: string;
  categoria: string;
  tiempo: string;
  personas: number;
  ingredientes: string[];
  preparacion: string;
  imagen: string | ArrayBuffer | null;
}
@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [IconsModule,FormsModule, CommonModule  ],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {

  categorias: string[] = ['Desayunos', 'Aperitivos', 'Entradas', 'Postres'];
  recetas: Receta[] = [];
  nuevaReceta: Receta = this.inicializarReceta();
  ingredienteActual: string = '';

  inicializarReceta(): Receta {
    return {
      titulo: '',
      categoria: '',
      tiempo: '',
      personas: 0,
      ingredientes: [],
      preparacion: '',
      imagen: null
    };
  }

  agregarIngrediente() {
    if (this.ingredienteActual.trim()) {
      this.nuevaReceta.ingredientes.push(this.ingredienteActual.trim());
      this.ingredienteActual = '';
    }
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.nuevaReceta.imagen = e.target?.result || null;
      };
      reader.readAsDataURL(file);
    }
  }

  guardarReceta() {
    if (this.nuevaReceta.titulo && this.nuevaReceta.categoria) {
      this.recetas.push({ ...this.nuevaReceta });
      this.nuevaReceta = this.inicializarReceta();
      this.cerrarModal();
      console.log(this.recetas);
    }
  }

  cerrarModal() {
    const checkbox = document.getElementById('btn-modal') as HTMLInputElement;
    if (checkbox) {
      checkbox.checked = false;
    }
  }

  seleccionarCategoria(categoria: string) {
    this.nuevaReceta.categoria = categoria;
  }
}
