import { Routes} from '@angular/router';
import { authGuard } from './auth/guards/auth.guard';
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
  { path: 'home', component: HomeComponent, canActivate: [authGuard] },
  { path: 'BudgetComponent', component: BudgetComponent,canActivate: [authGuard]  },
  { path: 'BudgetRouterComponent/:monto', component: BudgetRouterComponent,canActivate: [authGuard]  },
  { path: 'Masscalculator', component: MassCalculatorComponent,canActivate: [authGuard] },
  { path: 'recipes', component: RecipesComponent,canActivate: [authGuard] },
  { path: 'cookingMusic', component: CookingMusicComponent,canActivate: [authGuard] },
  { path: 'timer', component: TimerComponent,canActivate: [authGuard] },
  { path: 'myrecipes', component: MyRecipesComponent,canActivate: [authGuard] },
  { path: 'myrecipesdetail/:userId/:id', component: DetailMyrecipesComponent,canActivate: [authGuard] },
  { path: 'todolist', component: TodolistComponent,canActivate: [authGuard] },
  { path: 'callback', component: CallbackComponent },
  { path: 'spotifyPlayListDetail/:id', component: SpotifyPlayListDetailComponent,canActivate: [authGuard] },
  { path: 'mealDetail/:id', component: MealDetailComponent,canActivate: [authGuard] },
  { path: 'mealListCategories/:strCategory', component: MealListCategoriesComponent,canActivate: [authGuard] },
  { path: 'not-found', component: NotFoundComponent,canActivate: [authGuard] },
  { path: '**', pathMatch: 'full', redirectTo: 'not-found' },
];
