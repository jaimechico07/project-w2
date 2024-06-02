import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'
import { CommonModule } from '@angular/common';

import { IconsModule } from '../../icons/icons.module';

interface NavigationItem {
  color:string;
  icon: string; // La URL del icono o imagen
  text: string; // El texto que se mostrará en el hover
  link: string; // La ruta a la que se dirigirá al hacer clic
}
@Component({
  selector: 'app-button-floating',
  standalone: true,
  imports: [IconsModule,RouterLink,CommonModule],
  templateUrl: './button-floating.component.html',
  styleUrl: './button-floating.component.css'
})
export class ButtonFloatingComponent {
  showCircles: boolean = false;
  hoveredItem: NavigationItem | null = null;

    // Definir la estructura de navigationItems con la información necesaria para cada círculo
    navigationItems: NavigationItem[] = [
      { color:'#FFD1DC',icon: 'chef-hat', text: 'Presupuesto', link: '/BudgetComponent' },
      { color:'#FFF8CC',icon: 'chef-hat', text: 'Calculadora de masa', link: '/Masscalculator' },
      { color:'#B7E4C7',icon: 'chef-hat', text: 'Recetas', link: '/recipes' },
      { color:'#D9CBE5',icon: 'chef-hat', text: 'Musica', link: '/cookingMusic' },
      { color:'#B5EAEA',icon: 'chef-hat', text: 'Temporizador', link: '/timer' },
      { color:'#FFDAB9',icon: 'chef-hat', text: 'Calculadora', link: '/calculator' },
      { color:'#E6E6FA',icon: 'chef-hat', text: 'Hora', link: '/hour' },
      { color:'#FFFDD0',icon: 'chef-hat', text: 'To do list', link: '/todolist' }
      // Agrega más elementos según sea necesario
    ];

  toggleVisibility() {
    this.showCircles = !this.showCircles;
  }

  generateArray(n: number): any[] {
    return Array(n);
  }

  setHoveredItem(item: NavigationItem): void {
    this.hoveredItem = item;
  }
}
