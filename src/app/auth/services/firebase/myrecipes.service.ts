import { Injectable } from '@angular/core';
import { Database, ref, set, get, push, update } from '@angular/fire/database';
import { Receta } from '../../../shared/firebase-models';

@Injectable({
  providedIn: 'root'
})

export class MyrecipeService {

  constructor(private db: Database) {}

  //recetas cards
  async getUserRecipes(userId: string): Promise<Receta[]> {
    try {
      const recipeRef = ref(this.db, `recipes/${userId}`);
      const snapshot = await get(recipeRef);
      const data = snapshot.val();
      return data ? Object.entries(data).map(([id, receta]: [string, any]) => ({
        ...receta,
        id
      })) : [];
    } catch (error) {
      console.error('Error fetching user recipes:', error);
      return [];
    }
  }

  //titulo de mis rectas y categorias
  async getUserTitleAndCategories(userId: string): Promise<{ titulo: string; categorias: string[] }> {
    try {
      const userRef = ref(this.db, `users/${userId}`);
      const snapshot = await get(userRef);
      const data = snapshot.val();
      return {
        titulo: data?.titulo || 'Mis Recetas',
        categorias: data?.categorias || ['Desayunos', 'Aperitivos', 'Entradas', 'Postres']
      };
    } catch (error) {
      console.error('Error fetching title and categories:', error);
      return {
        titulo: 'Mis Recetas',
        categorias: ['Desayunos', 'Aperitivos', 'Entradas', 'Postres']
      };
    }
  }


  async addRecipes(userId: string, recipe: Receta): Promise<any> {
    try {
      const recipeListRef = ref(this.db, `recipes/${userId}`);
      const newRecipeRef = push(recipeListRef);
      recipe.id = newRecipeRef.key || '';
      await set(newRecipeRef, recipe);
      return newRecipeRef;
    } catch (error) {
      console.error('Error adding recipes:', error);
    }
  }


  //actualizar el titulo y las categorias
  async updateUserTitleAndCategories(userId: string, titulo: string, categorias: string[]): Promise<void> {
    try {
      const userRef = ref(this.db, `users/${userId}`);
      await update(userRef, { titulo, categorias });
    } catch (error) {
      console.error('Error updating title and categories:', error);
    }
  }

  // editar recetas por id
  async getRecipe(userId: string, recetaId: string): Promise<Receta> {
    const recipeRef = ref(this.db, `recipes/${userId}/${recetaId}`);
    const snapshot = await get(recipeRef);
    return snapshot.val();
  }

  // actualizar recetas por id
  async updateRecipe(userId: string, receta: Receta): Promise<void> {
    const recipeRef = ref(this.db, `recipes/${userId}/${receta.id}`);
    await update(recipeRef, receta);
  }

}
