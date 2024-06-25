import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';

import { IconsModule } from '../../icons/icons.module';

interface NavigationItem {
  color:string;
  icon: string;
  text: string;
  originalText: string;
  link: string;
}

@Component({
  selector: 'app-button-floating',
  standalone: true,
  imports: [IconsModule,CommonModule],
  templateUrl: './button-floating.component.html',
  styleUrl: './button-floating.component.css'
})
export class ButtonFloatingComponent {
  showCircles: boolean = false;
  hoveredItem: NavigationItem | null = null;

    navigationItems: NavigationItem[] = [
      { color:'#FFD1DC',icon: 'chef-hat',originalText:'Presupuesto', text: 'Presupuesto', link: '/BudgetComponent' },
      { color:'#FFF8CC',icon: 'chef-hat',originalText:'Calculadora de masa', text: 'Calculadora de masa', link: '/Masscalculator' },
      { color:'#B7E4C7',icon: 'chef-hat',originalText:'Recetas', text: 'Recetas', link: '/recipes' },
      { color:'#D9CBE5',icon: 'chef-hat',originalText:'Musica', text: 'Musica', link: '/cookingMusic' },
      { color:'#B5EAEA',icon: 'chef-hat',originalText:'Temporizador', text: 'Temporizador', link: '/timer' },
      { color:'#FFDAB9',icon: 'chef-hat',originalText:'Calculadora', text: 'Calculadora', link: '/calculator' },
      { color:'#E6E6FA',icon: 'chef-hat',originalText:'Hora', text: 'Hora', link: '/hour' },
      { color:'#FFFDD0',icon: 'chef-hat',originalText:'To do list', text: 'To do list', link: '/todolist' }
    ];

    constructor(private router: Router) {
      this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          this.updateButtonTexts();
        }
      });
    }

    ngOnInit() {
      this.updateButtonTexts();
    }

  toggleVisibility() {
    this.showCircles = !this.showCircles;
  }

  setHoveredItem(item: NavigationItem): void {
    this.hoveredItem = item;
  }

  updateButtonTexts() {
    const currentUrl = this.router.url;
    this.navigationItems.forEach(item => {
      if (currentUrl.startsWith(item.link)) {
        item.text = 'Home';
      } else {
        item.text = item.originalText;
      }
    });
  }

  navigate(item: NavigationItem) {
    if (this.router.url.startsWith(item.link)) {
      this.router.navigate(['/home']);
    } else {
      this.router.navigate([item.link]);
    }
  }
}
