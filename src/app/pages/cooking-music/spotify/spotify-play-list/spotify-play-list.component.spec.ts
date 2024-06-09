import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotifyPlayListComponent } from './spotify-play-list.component';

describe('SpotifyPlayListComponent', () => {
  let component: SpotifyPlayListComponent;
  let fixture: ComponentFixture<SpotifyPlayListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpotifyPlayListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpotifyPlayListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
