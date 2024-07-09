import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, updateProfile, onAuthStateChanged, User } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { getStorage, ref, uploadBytes, getDownloadURL } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User | null = null;

  constructor(private auth: Auth, private router: Router) {
    onAuthStateChanged(this.auth, (user) => {
      this.user = user;
    });
  }

  isLoggedIn(): boolean {
    return !!this.user;
  }

  get authInstance(): Auth {
    return this.auth;
  }

  async login(email: string, password: string) {
    try {
      await signInWithEmailAndPassword(this.auth, email, password);
      this.router.navigate(['/home']);
    } catch (error) {
      console.error('Login error: ', error);
    }
  }


  async register(email: string, password: string, displayName?: string, photoFile?: File | null) {
    try {
      const authResult = await createUserWithEmailAndPassword(this.auth, email, password);
      let photoURL = null;

      if (photoFile) {
        const storage = getStorage();
        const photoRef = ref(storage, `userPhotos/${authResult.user.uid}/${photoFile.name}`);
        await uploadBytes(photoRef, photoFile);
        photoURL = await getDownloadURL(photoRef);
      }

      if (displayName || photoURL) {
        await updateProfile(authResult.user, { displayName: displayName || null, photoURL: photoURL || null });
      }

      this.router.navigate(['/login']);
    } catch (error) {
      console.error('Register error: ', error);
      throw error; // Propaga el error para manejarlo en el componente
    }
  }


  async googleLogin() {
    try {
      const provider = new GoogleAuthProvider();
      const authResult = await signInWithPopup(this.auth, provider);
      this.router.navigate(['/home']);
    } catch (error) {
      console.error('Google login error: ', error);
    }
  }

  logout() {
    signOut(this.auth);
    this.router.navigate(['/login']);
  }
}
