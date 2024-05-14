import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ruta5Component } from './ruta5.component';

describe('Ruta5Component', () => {
  let component: Ruta5Component;
  let fixture: ComponentFixture<Ruta5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ruta5Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ruta5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
