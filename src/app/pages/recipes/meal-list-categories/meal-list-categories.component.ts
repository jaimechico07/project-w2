import { Component, OnInit } from '@angular/core';
import { IconsModule } from '../../../icons/icons.module';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MealdbService } from '../../../auth/services/recipesCook/mealdb.service'
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-meal-list-categories',
  standalone: true,
  imports: [IconsModule, CommonModule, FormsModule,RouterLink],
  templateUrl: './meal-list-categories.component.html',
  styleUrl: './meal-list-categories.component.css'
})
export class MealListCategoriesComponent implements OnInit{
  mealListCategory: any[] = [];
  strCategory : string | null = null;

  constructor(
    private route: ActivatedRoute, private mealdbService: MealdbService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.strCategory = params.get('strCategory');
      if (this.strCategory) {
        this.loadMealDetails(this.strCategory);

      }
    });
  }

  async loadMealDetails(strCategory: string) {
    try {
      const data = await this.mealdbService.filterMealsByCategory(strCategory);
      this.mealListCategory = data.meals;
    } catch (error) {
      console.error('Error fetching', error);
    }
  }

}
