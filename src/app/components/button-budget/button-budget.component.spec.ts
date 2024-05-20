import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonBudgetComponent } from './button-budget.component';

describe('ButtonBudgetComponent', () => {
  let component: ButtonBudgetComponent;
  let fixture: ComponentFixture<ButtonBudgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonBudgetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonBudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
