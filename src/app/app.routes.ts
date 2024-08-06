import { Routes} from '@angular/router';
// import { authGuard } from './auth/guards/auth.guard';
import { HomeComponent } from './pages/home/home.component';
import { BudgetComponent } from './pages/budget/budget.component';
import { BudgetRouterComponent } from './pages/budget-router/budget-router.component';
import { TimerComponent } from './pages/timer/timer.component';
import { RecipesComponent } from './pages/recipes/recipes.component';
import { CookingMusicComponent } from './pages/cooking-music/cooking-music.component';
import { TodolistComponent } from './pages/todolist/todolist.component';
import { SpotifyPlayListDetailComponent } from './pages/cooking-music/spotify/spotify-play-list-detail/spotify-play-list-detail.component';

import { NotFoundComponent } from './pages/not-found/not-found.component';
import { MassCalculatorComponent } from './pages/mass-calculator/mass-calculator.component';
import { CallbackComponent } from './auth/services/spotify/callback.component'

import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

import { MealDetailComponent } from './pages/recipes/meal-detail/meal-detail.component';
import { MealListCategoriesComponent } from './pages/recipes/meal-list-categories/meal-list-categories.component';

import { MyRecipesComponent } from './pages/myrecipes/my-recipes.component';
import { DetailMyrecipesComponent } from './pages/myrecipes/detail-myrecipes/detail-myrecipes.component';

export const routes: Routes = [
  { path: '', redirectTo: "login", pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'BudgetComponent', component: BudgetComponent  },
  { path: 'BudgetRouterComponent/:monto', component: BudgetRouterComponent  },
  { path: 'Masscalculator', component: MassCalculatorComponent },
  { path: 'recipes', component: RecipesComponent },
  { path: 'cookingMusic', component: CookingMusicComponent },
  { path: 'timer', component: TimerComponent },
  { path: 'myrecipes', component: MyRecipesComponent },
  { path: 'myrecipesdetail/:userId/:id', component: DetailMyrecipesComponent },
  { path: 'todolist', component: TodolistComponent },
  { path: 'callback', component: CallbackComponent },
  { path: 'spotifyPlayListDetail/:id', component: SpotifyPlayListDetailComponent },
  { path: 'mealDetail/:id', component: MealDetailComponent },
  { path: 'mealListCategories/:strCategory', component: MealListCategoriesComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'not-found' },
];
