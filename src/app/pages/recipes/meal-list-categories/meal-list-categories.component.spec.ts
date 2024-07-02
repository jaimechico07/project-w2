import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealListCategoriesComponent } from './meal-list-categories.component';

describe('MealListCategoriesComponent', () => {
  let component: MealListCategoriesComponent;
  let fixture: ComponentFixture<MealListCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MealListCategoriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MealListCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
