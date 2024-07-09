import { Component, OnInit } from '@angular/core';
import { IconsModule } from '../../../icons/icons.module';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MealdbService } from '../../../auth/services/recipesCook/mealdb.service'

@Component({
  selector: 'app-meal-detail',
  standalone: true,
  imports: [IconsModule, CommonModule, FormsModule],
  templateUrl: './meal-detail.component.html',
  styleUrl: './meal-detail.component.css'
})
export class MealDetailComponent implements OnInit {
  mealDetail: any;

  constructor(
    private route: ActivatedRoute, private mealdbService: MealdbService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const idMeal = params.get('id');
      if (idMeal) {
        this.loadMealDetails(idMeal);
      }
    });
  }

  async loadMealDetails(idMeal: string) {
    try {
      const data = await this.mealdbService.searchMealsDetail(idMeal);
      this.mealDetail = data.meals;
      console.log(this.mealDetail)
    } catch (error) {
      console.error('Error fetching', error);
    }
  }

  getIngredients(detail: any): string[] {
    const ingredients = [];
    for (let i = 1; i <= 15; i++) {
      const ingredient = detail[`strIngredient${i}`];
      if (ingredient) {
        ingredients.push(ingredient);
      }
    }
    return ingredients;
  }

  getMeasures(detail: any): string[] {
    const measures = [];
    for (let i = 1; i <= 15; i++) {
      const measure = detail[`strMeasure${i}`];
      if (measure) {
        measures.push(measure);
      }
    }
    return measures;
  }

}
