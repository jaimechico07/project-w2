import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { TimerComponent } from './timer.component';

describe('TimerComponent', () => {
  let component: TimerComponent;
  let fixture: ComponentFixture<TimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TimerComponent],
      imports: [FormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should not allow negative values for hours, minutes, and seconds', () => {
    component.horas = -1;
    component.minutos = -1;
    component.segundos = -1;
    component.validarHoras();
    component.validarMinutos();
    component.validarSegundos();
    expect(component.horas).toBeGreaterThanOrEqual(0);
    expect(component.minutos).toBeGreaterThanOrEqual(0);
    expect(component.segundos).toBeGreaterThanOrEqual(0);
  });
});
