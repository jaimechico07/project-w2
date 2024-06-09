import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotifyPlayListDetailComponent } from './spotify-play-list-detail.component';

describe('SpotifyPlayListDetailComponent', () => {
  let component: SpotifyPlayListDetailComponent;
  let fixture: ComponentFixture<SpotifyPlayListDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpotifyPlayListDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpotifyPlayListDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
