import { Injectable } from '@angular/core';
import { Resolve, Router } from '@angular/router';
import { FirebaseService } from './firebase.service';

@Injectable({
  providedIn: 'root',
})
export class AuthResolver implements Resolve<boolean> {
  constructor(private auth: FirebaseService, private router: Router) {}

  resolve(): boolean {
    if (this.auth.checkAuthenticated()) {
      this.router.navigate(['/tabs/tab1']);
      return false; // Do not load component
    }
    return true; // Load component
  }
}
