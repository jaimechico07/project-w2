import { Component  } from '@angular/core';
import { SpotifyPlayListComponent } from './spotify/spotify-play-list/spotify-play-list.component';
import { SpotifySearchComponent } from './spotify/spotify-search/spotify-search.component';


@Component({
  selector: 'app-cooking-music',
  standalone: true,
  imports: [SpotifyPlayListComponent,SpotifySearchComponent],
  templateUrl: './cooking-music.component.html',
  styleUrl: './cooking-music.component.css'
})

export class CookingMusicComponent  {



}
