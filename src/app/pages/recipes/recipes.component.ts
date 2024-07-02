import { Component } from '@angular/core';
import { MealSearchComponent } from './meal-search/meal-search.component';
import { MealCategoriesComponent } from './meal-categories/meal-categories.component';
import { MealLetterComponent } from './meal-letter/meal-letter.component';


@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [MealSearchComponent, MealCategoriesComponent,MealLetterComponent],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})
export class RecipesComponent {

}
