import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getDatabase, provideDatabase } from '@angular/fire/database';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"fireauth-cook","appId":"1:73982686403:web:6c9940e20670a39ada1e76","storageBucket":"fireauth-cook.appspot.com","apiKey":"AIzaSyDbsB-wwBIMz5DGK4y43hd5ZO3bzaOD3nw","authDomain":"fireauth-cook.firebaseapp.com","messagingSenderId":"73982686403"})), provideAuth(() => getAuth()), provideDatabase(() => getDatabase())]
};
