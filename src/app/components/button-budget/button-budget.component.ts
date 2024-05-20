import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button-budget',
  standalone: true,
  imports: [],
  templateUrl: './button-budget.component.html',
  styleUrl: './button-budget.component.css'
})
export class ButtonBudgetComponent {
  // @Input() buttonText: Permite que el texto del botón se pase como un parámetro.
  @Input() buttonText: string = 'Button';

  // @Output() buttonClick: Permite que el evento de clic se emita al componente padre.
  @Output() buttonClick = new EventEmitter<void>();

  onClick() {
    this.buttonClick.emit();
  }
}
