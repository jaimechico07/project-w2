import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailRecipesComponent } from './detail-recipes.component';

describe('DetailRecipesComponent', () => {
  let component: DetailRecipesComponent;
  let fixture: ComponentFixture<DetailRecipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailRecipesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
