// auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private clientId = '0fa0fc7cbede46569872d551a394c103';
  private clientSecret = 'c30ad7be33314b2ea52507fb63afa46d';
  private redirectUri = 'http://localhost:4200/callback';
  private authUrl = 'https://accounts.spotify.com/authorize';
  private tokenUrl = 'https://accounts.spotify.com/api/token';

  constructor() { }

  public login() {
    const scopes = [
      'user-read-private',
      'user-read-email',
      'playlist-read-private',
    ];
    window.location.href = `${this.authUrl}?client_id=${this.clientId}&response_type=code&redirect_uri=${encodeURIComponent(this.redirectUri)}&scope=${scopes.join('%20')}`;
  }

  public async getAccessToken(code: string): Promise<string> {
    try {
      const response = await fetch(this.tokenUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Basic ' + btoa(`${this.clientId}:${this.clientSecret}`)
        },
        body: `grant_type=authorization_code&code=${code}&redirect_uri=${encodeURIComponent(this.redirectUri)}`
      });

      const data = await response.json();
      if (data.access_token) {
        localStorage.setItem('access_token', data.access_token);
        localStorage.setItem('expires_in', (Date.now() + data.expires_in * 1000).toString());
        return data.access_token;
      } else {
        console.error('Failed to obtain access token', data);
        throw new Error('Failed to obtain access token');
      }
    } catch (error) {
      console.error('Error fetching access token', error);
      throw error;
    }
  }

  public getTokenFromLocalStorage(): string | null {
    const token = localStorage.getItem('access_token');
    const expiresIn = localStorage.getItem('expires_in');
    if (token && expiresIn && Date.now() < parseInt(expiresIn)) {
      return token;
    } else {
      localStorage.removeItem('access_token');
      localStorage.removeItem('expires_in');
      return null;
    }
  }
}
