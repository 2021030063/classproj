import { Component } from '@angular/core';
import {
  IonChip,
  IonAvatar,
  IonLabel,
  IonIcon,
  IonFooter,
  IonToolbar,
  IonTitle,
  IonCardSubtitle,
} from '@ionic/angular/standalone';
import { IconsModule } from 'src/app/shared/icons.module';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  imports: [
    IonTitle,
    IonToolbar,
    IonFooter,
    IonIcon,
    IonAvatar,
    IonChip,
    IonLabel,
    IonCardSubtitle,
    IconsModule
  ],
  standalone: true,
})
export class AppFooterComponent {
  constructor() {
  }
}
