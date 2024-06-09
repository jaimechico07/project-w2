import { Component , OnInit} from '@angular/core';
import { SpotifyService } from '../../../../../service/spotify.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-spotify-play-list',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink],
  templateUrl: './spotify-play-list.component.html',
  styleUrl: './spotify-play-list.component.css'
})


export class SpotifyPlayListComponent implements OnInit{
  playlists: any[] = [];

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit(): void {
    this.loadFeaturedPlaylists();
  }

  async loadFeaturedPlaylists() {
    try {
      const data = await this.spotifyService.getFeaturedPlaylists();
      this.playlists = data.playlists.items;
      console.log(this.playlists);
    } catch (error) {
      console.error('Error fetching featured playlists', error);
    }
  }
}
