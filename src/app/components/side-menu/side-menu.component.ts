import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonMenu,
  IonList,
  IonItem,
  IonButton,
  IonButtons,
  IonMenuToggle,
} from '@ionic/angular/standalone';
import { IconsModule } from 'src/app/shared/icons.module';
import { FirebaseService } from '../../auth/firebase.service';

interface page {
  name: string;
  redirect: string;
  icon: string;
}

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
  imports: [
    IonButtons,
    IonButton,
    IconsModule,
    IonItem,
    IonList,
    IonContent,
    IonTitle,
    IonToolbar,
    IonHeader,
    IonMenu,
    RouterModule,
    IonMenuToggle,
  ],
  standalone: true,
})
export class SideMenuComponent {
  constructor(private auth: FirebaseService, private router: Router) {}

  closeMenu() {
    const button = document.getElementById('logoutBtn') as HTMLButtonElement;
    button.click();
  }

  logout() {
    if (confirm('Are you sure you want to log out?')) {
      this.auth.logout();
      this.closeMenu(); // Close menu after logout confirmation
      this.router.navigate(['/login']);
    }
  }

  pages: page[] = [
    {
      name: 'Index',
      redirect: '/tabs/tab1',
      icon: 'home',
    },
  ];
}
