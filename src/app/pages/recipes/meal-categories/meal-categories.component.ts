import { Component , OnInit} from '@angular/core';
import { MealdbService } from '../../../auth/services/recipesCook/mealdb.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-meal-categories',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink],
templateUrl: './meal-categories.component.html',
  styleUrl: './meal-categories.component.css'
})
export class MealCategoriesComponent implements OnInit {
  categories: any[] = [];

  constructor(private mealdbService: MealdbService) { }

  ngOnInit(): void {
    this.loadFeaturedcategories();
  }

  async loadFeaturedcategories() {
    try {
      const data = await this.mealdbService.showMealCategories();
      this.categories = data.categories;
    } catch (error) {
      console.error('Error fetching featured categories', error);
    }
  }
}
