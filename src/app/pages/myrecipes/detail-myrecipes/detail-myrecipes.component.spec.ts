import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailMyrecipesComponent } from './detail-myrecipes.component';

describe('DetailMyrecipesComponent', () => {
  let component: DetailMyrecipesComponent;
  let fixture: ComponentFixture<DetailMyrecipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailMyrecipesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailMyrecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
