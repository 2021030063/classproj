import { Component, Input } from '@angular/core';
import { StudentsService } from '../../services/students.service';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonBackButton,
  IonMenuButton,
  IonButton,
  IonIcon,
  IonSearchbar
 } from '@ionic/angular/standalone';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [
    IonSearchbar,
    IonIcon,
    IonButton,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonBackButton,
    IonMenuButton,
  ],
})
export class HeaderComponent {
  @Input() title: string = 'Default title';
  @Input() search: boolean = false;
  constructor(public students: StudentsService) {}
}
