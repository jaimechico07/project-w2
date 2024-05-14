import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MassCalculatorComponent } from './mass-calculator.component';

describe('MassCalculatorComponent', () => {
  let component: MassCalculatorComponent;
  let fixture: ComponentFixture<MassCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MassCalculatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MassCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
