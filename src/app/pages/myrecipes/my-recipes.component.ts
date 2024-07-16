import { Component, OnInit} from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Receta } from '../../shared/firebase-models';
import { MyrecipeService } from '../../auth/services/firebase/myrecipes.service';
import { AuthService } from '../../auth/services/firebase/firebase-auth.services';
import { IconsModule } from '../../icons/icons.module';

@Component({
  selector: 'app-my-recipes',
  standalone: true,
  imports: [FormsModule, CommonModule,IconsModule, RouterLink],

templateUrl: './my-recipes.component.html',
  styleUrls: ['./my-recipes.component.css']
})
export class MyRecipesComponent implements OnInit {
  titulo: string = 'Mis Recetas';
  categorias: string[] = ['Desayunos', 'Aperitivos', 'Entradas', 'Postres'];
  nuevaCategoria: string = '';
  isEditing: boolean = false;

  recetas: Receta[] = [];
  nuevaReceta: Receta = this.inicializarReceta();
  ingredienteActual: string = '';
  userId: string | null = null;
  categoriaSeleccionada: string | null = null;

  constructor(private authService: AuthService, private myrecipeService: MyrecipeService) {}

  ngOnInit(): void {
    this.authService.authInstance.onAuthStateChanged((user) => {
      if (user) {
        this.userId = user.uid;
        this.loadUserData();
        this.loadRecipes();
      }
    });
  }


  async loadUserData() {
    if (this.userId) {
      const { titulo, categorias } = await this.myrecipeService.getUserTitleAndCategories(this.userId);
      this.titulo = titulo;
      this.categorias = categorias;
    }
  }

  async loadRecipes() {
    if (this.userId) {
      this.recetas = await this.myrecipeService.getUserRecipes(this.userId);
      this.recetas = this.recetas.filter(receta => !receta.eliminada);
    }
  }

  inicializarReceta(): Receta {
    return {
      titulo: '',
      categoria: '',
      tiempo: '',
      personas: 0,
      ingredientes: [],
      preparacion: '',
      imagen: null,
      id: ''
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

  async guardarReceta() {
    if (this.nuevaReceta.titulo && this.nuevaReceta.categoria) {
      if (this.userId) {
        if (this.nuevaReceta.id) {
          // Actualizar receta existente
          await this.myrecipeService.updateRecipe(this.userId, this.nuevaReceta);
        } else {
          // Agregar nueva receta
          const newRecetaId = await this.myrecipeService.addRecipes(this.userId, this.nuevaReceta);
          this.nuevaReceta.id = newRecetaId; // Asignar el ID generado
          this.recetas.push({ ...this.nuevaReceta });
        }
        this.nuevaReceta = this.inicializarReceta();
        this.cerrarModal();
        await this.loadRecipes();
      }
    }
  }

  async eliminarReceta(receta: Receta) {
    receta.eliminada = true; // Marcar como eliminada
    await this.myrecipeService.updateRecipe(this.userId!, receta); // Actualizar en la base de datos
    this.loadRecipes(); // Actualizar la lista de recetas
  }


  cerrarModal() {
    const checkbox = document.getElementById('btn-modal') as HTMLInputElement;
    if (checkbox) {
      checkbox.checked = false;
    }
    this.categoriaSeleccionada = null;
  }

  seleccionarCategoria(categoria: string) {
    this.nuevaReceta.categoria = categoria;
    this.categoriaSeleccionada = categoria;
  }

  abrirModalEdicion() {
    this.isEditing = true;
  }

  cerrarModalEdicion() {
    this.isEditing = false;
  }

  agregarCategoria() {
    if (this.nuevaCategoria.trim()) {
      this.categorias.push(this.nuevaCategoria.trim());
      this.nuevaCategoria = '';
    }
  }

  eliminarCategoria(index: number) {
    this.categorias.splice(index, 1);
  }

  async guardarCambios() {
    if (this.userId) {
      await this.myrecipeService.updateUserTitleAndCategories(this.userId, this.titulo, this.categorias);
      this.cerrarModalEdicion();
    }
  }


}
