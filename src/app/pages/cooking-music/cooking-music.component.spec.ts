import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookingMusicComponent } from './cooking-music.component';

describe('CookingMusicComponent', () => {
  let component: CookingMusicComponent;
  let fixture: ComponentFixture<CookingMusicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CookingMusicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CookingMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
