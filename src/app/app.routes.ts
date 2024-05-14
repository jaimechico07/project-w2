import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BudgetComponent } from './pages/budget/budget.component';
import { BudgetRouterComponent } from './pages/budget-router/budget-router.component';

import { Ruta3Component } from './pages/ruta3/ruta3.component';
import { Ruta4Component } from './pages/ruta4/ruta4.component';
import { Ruta5Component } from './pages/ruta5/ruta5.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { MassCalculatorComponent } from './pages/mass-calculator/mass-calculator.component';



export const routes: Routes = [
  { path:"", component:HomeComponent},
  { path: 'BudgetComponent', component: BudgetComponent },
  { path: 'BudgetRouterComponent/:monto', component: BudgetRouterComponent},
  { path: 'Masscalculator', component: MassCalculatorComponent },
  { path: 'ruta3', component: Ruta3Component },
  { path: 'ruta4', component: Ruta4Component },
  { path: 'ruta5', component: Ruta5Component },
  {
    path: 'not-found', component: NotFoundComponent
  },
  { path: '**', pathMatch: 'full', redirectTo: 'not-found' },
];
