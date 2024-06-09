import { Injectable } from '@angular/core';
import { AuthService } from '../service/auth.services';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private authService: AuthService) { }

  private async getAccessToken(): Promise<string> {
    let token = this.authService.getTokenFromLocalStorage();
    if (!token) {
      throw new Error('No access token available');
    }
    return token;
  }

  public async fetchSpotifyData(endpoint: string): Promise<any> {
    const token = await this.getAccessToken();

    const response = await fetch(`https://api.spotify.com/v1/${endpoint}`, {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Error response from Spotify:', errorData);
      throw new Error(`Failed to fetch data from Spotify: ${errorData.error.message}`);
    }

    return response.json();
  }

  // public async getPlaylist(playlistId: string): Promise<any> {
  //   return this.fetchSpotifyData(`playlists/${playlistId}`);
  // }

  public async searchTracks(query: string): Promise<any> {
    return this.fetchSpotifyData(`search?q=${query}&type=track`);
  }

  //Lo mas sonado
  public async getFeaturedPlaylists(): Promise<any> {
    return this.fetchSpotifyData('browse/featured-playlists');
  }

  public async getPlaylistTracks(playlistId: string): Promise<any> {
    return this.fetchSpotifyData(`playlists/${playlistId}/tracks`);
  }

  //Para poder obtener los detalles de los album
  public async getAlbum(albumId: string): Promise<any> {
    return this.fetchSpotifyData(`albums/${albumId}/tracks`);
  }
}
