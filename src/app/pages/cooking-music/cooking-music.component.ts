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
  // cancion: string = "";
  // errorMessage: string = "";
  // resultados: any[] = []; // Propiedad para almacenar los resultados

  // handleSearch() {
  //   if (this.cancion === "") {
  //     this.errorMessage = "*Ingresa el nombre de una canción";
  //   } else {
  //     this.errorMessage = "";
  //     this.fetchMusic(this.cancion).then(
  //       response => {
  //         console.log(response); // Muestra la respuesta en la consola
  //         this.resultados = response.data; // Guarda los resultados
  //         // Aquí puedes agregar código para actualizar la interfaz de usuario
  //       }
  //     ).catch(
  //       error => {
  //         console.error(error);
  //         this.errorMessage = `Error al buscar la canción: ${this.getErrorMessage(error)}`;
  //       }
  //     );
  //   }
  // }

  // async fetchMusic(cancion: string): Promise<any> {
  //   const url = `https://deezerdevs-deezer.p.rapidapi.com/search/?q=${encodeURIComponent(cancion)}&type=multi&offset=0&limit=10&numberOfTopResults=5`;
  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       'x-rapidapi-key': 'b526ecc92dmshb06b06a9b82c656p1c5962jsn2b593dd9cceb',
	// 	    'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com'
  //     }
  //   };

  //   try {
  //     const response = await fetch(url, options);
  //     if (!response.ok) {
  //       const errorDetail = await response.text();
  //       if (response.status === 429) {
  //         // Esperar 1 minuto antes de reintentar
  //         await this.delay(60000);
  //         // Reintentar la solicitud
  //         return this.fetchMusic(cancion);
  //       }
  //       throw new Error(`Network response was not ok: ${response.status} ${response.statusText} - ${errorDetail}`);
  //     }
  //     return response.json();
  //   } catch (error) {
  //     throw new Error(this.getErrorMessage(error));
  //   }
  // }

  // delay(ms: number): Promise<void> {
  //   return new Promise(resolve => setTimeout(resolve, ms));
  // }

  // getErrorMessage(error: unknown): string {
  //   if (error instanceof Error) {
  //     return error.message;
  //   } else {
  //     return 'An unknown error occurred';
  //   }
  // }


}
