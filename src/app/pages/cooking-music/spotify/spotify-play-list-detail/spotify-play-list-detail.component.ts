import { Component, OnInit , ViewChildren, QueryList, ElementRef} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../../../../service/spotify/spotify.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-spotify-play-list-detail',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './spotify-play-list-detail.component.html',
  styleUrl: './spotify-play-list-detail.component.css'
})
export class SpotifyPlayListDetailComponent implements OnInit{
  playDetail: any;
  tracks: any[] = [];
  currentAudioIndex: number | null = null;
  @ViewChildren('audioPlayer') audioPlayers!: QueryList<ElementRef<HTMLAudioElement>>;

  constructor(
    private route: ActivatedRoute,
    private spotifyService: SpotifyService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const playId = params.get('id');
      if (playId) {
        this.loadPlayListDetails(playId);
      }
    });
  }

  async loadPlayListDetails(playId: string) {
    try {
      const data = await this.spotifyService.getPlaylistTracks(playId);
      this.playDetail = data.items;
      console.log(this.playDetail);
    } catch (error) {
      console.error('Error fetching PlayList details', error);
    }
  }


  playTrack(currentAudio: HTMLAudioElement, index: number) {
    // Recorro todos los elementos de audio.
    this.audioPlayers.forEach((audioElement, i) => {
       // Pausa el audio del que no se quiere reproducir.
      if (audioElement.nativeElement !== currentAudio) {
        audioElement.nativeElement.pause();
      }
    });
     // Se actualiza el estado de reproducción del audio actual.
    this.currentAudioIndex = index;
  }

  playNextTrack() {
    if (this.currentAudioIndex !== null && this.currentAudioIndex < this.audioPlayers.length - 1) {
      const nextAudio = this.audioPlayers.toArray()[this.currentAudioIndex + 1].nativeElement;
      nextAudio.play();
    }
  }
}
