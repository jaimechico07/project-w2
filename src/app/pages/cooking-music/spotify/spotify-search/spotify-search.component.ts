import { Component,  ViewChildren, QueryList, ElementRef} from '@angular/core';
import { SpotifyService } from '../../../../auth/services/spotify/spotify.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IconsModule } from '../../../../icons/icons.module';


@Component({
  selector: 'app-spotify-search',
  standalone: true,
  imports: [CommonModule,FormsModule, IconsModule],
  templateUrl: './spotify-search.component.html',
  styleUrl: './spotify-search.component.css'
})
export class SpotifySearchComponent {
  query: string = '';
  tracks: any[] = [];
  currentAudioIndex: number | null = null;
  @ViewChildren('audioPlayer') audioPlayers!: QueryList<ElementRef<HTMLAudioElement>>;

  constructor(private spotifyService: SpotifyService) { }

  async search() {
    if (this.query.trim() !== '') {
      try {
        const data = await this.spotifyService.searchTracks(this.query);
        this.tracks = data.tracks.items;
      } catch (error) {
        console.error('Error fetching search results', error);
      }
    }
  }


  playTrack(currentAudio: HTMLAudioElement, index: number) {
    this.audioPlayers.forEach((audioElement, i) => {
      if (audioElement.nativeElement !== currentAudio) {
        audioElement.nativeElement.pause();
      }
    });
    this.currentAudioIndex = index;
  }

  playNextTrack() {
    if (this.currentAudioIndex !== null && this.currentAudioIndex < this.audioPlayers.length - 1) {
      const nextAudio = this.audioPlayers.toArray()[this.currentAudioIndex + 1].nativeElement;
      nextAudio.play();
    }
  }

}
