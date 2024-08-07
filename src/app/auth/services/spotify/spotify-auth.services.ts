import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private clientId = environment.spotify.clientId;
  private clientSecret = environment.spotify.clientSecret;
  private redirectUri = environment.spotify.redirectUri;
  private authUrl = environment.spotify.authUrl;
  private tokenUrl = environment.spotify.tokenUrl;

  constructor() {}

  public login() {
    const scopes = [
      'user-read-private',
      'user-read-email',
      'playlist-read-private',
    ];
    window.location.href = `${this.authUrl}?client_id=${
      this.clientId
    }&response_type=code&redirect_uri=${encodeURIComponent(
      this.redirectUri
    )}&scope=${scopes.join('%20')}`;
  }

  public async getAccessToken(code: string): Promise<string> {
    try {
      // Construcción de la solicitud POST para obtener el token de acceso
      const response = await fetch(this.tokenUrl, {
        method: 'POST',
        //Requerido por spotify para obtener acceso a los recursos
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization:
            'Basic ' + btoa(`${this.clientId}:${this.clientSecret}`),
        },
        body: `grant_type=authorization_code&code=${code}&redirect_uri=${encodeURIComponent(
          this.redirectUri
        )}`,
      });

      // Procesamiento de la respuesta JSON obtenida del servidor
      const data = await response.json();

      if (data.access_token) {
        localStorage.setItem('access_token', data.access_token);
        localStorage.setItem(
          'expires_in',
          (Date.now() + data.expires_in * 1000).toString()
        );
        return data.access_token;
      } else {
        // Manejo de errores si no se pudo obtener el token de acceso
        console.error('Failed to obtain access token', data);
        throw new Error('Failed to obtain access token');
      }
    } catch (error) {
      // Manejo de errores en caso de fallos en la solicitud HTTP
      console.error('Error fetching access token', error);
      throw error;
    }
  }

  //verificar si existe un token valido cuando realizao una solicitud
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
