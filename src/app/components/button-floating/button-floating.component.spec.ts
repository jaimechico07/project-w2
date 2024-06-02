import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonFloatingComponent } from './button-floating.component';

describe('ButtonFloatingComponent', () => {
  let component: ButtonFloatingComponent;
  let fixture: ComponentFixture<ButtonFloatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonFloatingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonFloatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
