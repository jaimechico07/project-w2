import { Component } from '@angular/core';
import { IconsModule } from '../../../icons/icons.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MealdbService } from '../../../../service/recipesCook/mealdb.service'
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-meal-search',
  standalone: true,
  imports: [IconsModule, CommonModule, FormsModule, RouterLink],
  templateUrl: './meal-search.component.html',
  styleUrl: './meal-search.component.css'
})
export class MealSearchComponent {
  mealName: string = '';
  meals: any[] = [];

  constructor(private mealdbService: MealdbService) { }

  async search() {
    if (this.mealName.trim() !== '') {
      try {
        const data = await this.mealdbService.searchMeals(this.mealName);
        this.meals = data.meals;
        this.mealName = '';
      } catch (error) {
        console.error('Error fetching search results', error);

      }
    }
  }

  clear() {
    this.meals = []
  }
}
