import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyrecipeService } from '../../../auth/services/firebase/myrecipes.service';
import { Receta } from '../../../shared/firebase-models';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IconsModule } from '../../../icons/icons.module';

@Component({
  selector: 'app-detail-myrecipes',
  standalone: true,
  imports: [CommonModule,FormsModule,IconsModule ],
  templateUrl: './detail-myrecipes.component.html',
  styleUrl: './detail-myrecipes.component.css'
})
export class DetailMyrecipesComponent implements OnInit {
  receta: Receta | null = null;
  userId: string | null = null;
  isEditing: boolean = false;
  ingredienteActual: string = '';


  constructor(
    private route: ActivatedRoute,
    private myrecipeService: MyrecipeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(async (params) => {
      const recetaId = params.get('id');
      this.userId = params.get('userId');

      if (recetaId && this.userId) {
        await this.loadReceta(this.userId, recetaId);
      }
    });
}

async loadReceta(userId: string, recetaId: string) {
  const recetas = await this.myrecipeService.getUserRecipes(userId);
  this.receta = recetas.find(receta => receta.id === recetaId) || null;

}

  irAtras() {
    this.router.navigate(['/myrecipes']);
  }

  abrirEdicion() {
    this.isEditing = true;
  }

  cerrarEdicion() {
    this.isEditing = false;
  }

  agregarIngrediente() {
    if (this.ingredienteActual.trim()) {
      this.receta!.ingredientes.push(this.ingredienteActual.trim());
      this.ingredienteActual = '';
    }
  }

  eliminarIngrediente(index: number) {
    this.receta!.ingredientes.splice(index, 1);
  }

  async guardarCambios() {
    if (this.userId && this.receta) {
      await this.myrecipeService.updateRecipe(this.userId, this.receta);
      this.isEditing = false;
    }
  }



}
