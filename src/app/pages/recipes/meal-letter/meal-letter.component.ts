import { Component } from '@angular/core';
import { IconsModule } from '../../../icons/icons.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MealdbService } from '../../../auth/services/recipesCook/mealdb.service'
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-meal-letter',
  standalone: true,
  imports: [IconsModule, CommonModule, FormsModule, RouterLink],
  templateUrl: './meal-letter.component.html',
  styleUrl: './meal-letter.component.css'
})
export class MealLetterComponent {
  alphabet: string[] = [];
  meals: any[] = [];
  selectedLetter: string = '';

  constructor(private mealdbService: MealdbService) {
    this.alphabet = this.getAlphabet();
  }

  getAlphabet(): string[] {
    const letters = [];
    for (let i = 65; i <= 90; i++) {
      letters.push(String.fromCharCode(i));
    }
    return letters;
  }

  async searchLetter(letter: string) {
    this.selectedLetter = letter;
      try {
        const data = await this.mealdbService.searchMealsLetter(letter);
        this.meals = data.meals;
      } catch (error) {
        console.error('Error fetching search results', error);

      }

    }

    clear() {
      this.selectedLetter = '';
      this.meals = []
    }
  }

