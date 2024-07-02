import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MealdbService {


  public async fetchMealdbData(endpoint: string): Promise<any> {

    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/${endpoint}`, {
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Error response from Meal:', errorData);
      throw new Error(`Failed to fetch data from Meal: ${errorData.error.message}`);
    }

    return response.json();
  }


  public async searchMeals(nameMeal: string): Promise<any> {
    return this.fetchMealdbData(`search.php?s=${nameMeal}`);
  }

  public async showMealCategories(): Promise<any> {
    return this.fetchMealdbData(`categories.php`);
  }

  public async searchMealsLetter(letter: string): Promise<any> {
    return this.fetchMealdbData(`search.php?f=${letter}`);
  }

  public async searchMealsDetail(idMeal: string): Promise<any> {
    return this.fetchMealdbData(`lookup.php?i=${idMeal}`);
  }

  public async filterMealsByCategory(strCategory: string): Promise<any> {
    return this.fetchMealdbData(`filter.php?c=${strCategory}`);
  }

}
