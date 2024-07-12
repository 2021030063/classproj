import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { initializeApp } from 'firebase/app';
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { environment } from 'src/environments/environment.prod';

// Your web app's Firebase configuration
const firebaseConfig = environment.firebaseConfig

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = false;
  private user: any;

  constructor(private router: Router) {}

  login(email: string, password: string): void {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        this.isAuthenticated = true;
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('user', email);
        this.router.navigate(['/tabs/tab1']);
        this.user = userCredential.user.email;
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        // Check if errorMessage contains invalid-credential
        if (errorMessage.includes('invalid-credential')) {
          alert('Invalid email or password');
        }
      });
  }

  logout(): void {
    this.isAuthenticated = false;
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

  checkAuthenticated(): boolean {
    this.isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    return this.isAuthenticated;
  }

  getUser(): string {
    return this.user;
  }
}
