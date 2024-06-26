import { Routes} from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BudgetComponent } from './pages/budget/budget.component';
import { BudgetRouterComponent } from './pages/budget-router/budget-router.component';
import { TimerComponent } from './pages/timer/timer.component';
import { RecipesComponent } from './pages/recipes/recipes.component';
import { CookingMusicComponent } from './pages/cooking-music/cooking-music.component';
import { CalculatorComponent } from './pages/calculator/calculator.component';
import { TodolistComponent } from './pages/todolist/todolist.component';
import { HourComponent } from './pages/hour/hour.component';
import { SpotifyPlayListDetailComponent } from './pages/cooking-music/spotify/spotify-play-list-detail/spotify-play-list-detail.component';

import { NotFoundComponent } from './pages/not-found/not-found.component';
import { MassCalculatorComponent } from './pages/mass-calculator/mass-calculator.component';
import { CallbackComponent } from '../service/callback.component';

import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

export const routes: Routes = [
  { path: '', redirectTo:"login", pathMatch:'full'},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'home', component: HomeComponent},
  { path: 'BudgetComponent', component: BudgetComponent },
  { path: 'BudgetRouterComponent/:monto', component: BudgetRouterComponent},
  { path: 'Masscalculator', component: MassCalculatorComponent },
  { path: 'recipes', component: RecipesComponent },
  { path: 'cookingMusic', component: CookingMusicComponent },
  { path: 'timer', component: TimerComponent },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'hour', component: HourComponent},
  { path: 'todolist', component: TodolistComponent  },
  { path: 'callback', component: CallbackComponent },
  { path: 'spotifyPlayListDetail/:id', component: SpotifyPlayListDetailComponent},
  {
    path: 'not-found', component: NotFoundComponent
  },
  { path: '**', pathMatch: 'full', redirectTo: 'not-found' },
];
