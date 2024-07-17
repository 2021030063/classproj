import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonLabel, IonList, IonItem, IonButton, IonCard, IonCardContent } from '@ionic/angular/standalone';
import { HeaderComponent } from "../components/header/header.component";
import { TitleService } from '../services/title.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-maestros',
  templateUrl: 'maestros.page.html',
  styleUrls: ['maestros.page.scss'],
  standalone: true,
  imports: [IonCardContent, IonCard, IonButton,
    IonItem,
    IonList,
    IonLabel,
    IonInput,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    HeaderComponent,
    FormsModule,
    IonCardContent
  ],
})
export class MaestrosPage {
  title: string = 'Maestros';
  constructor(private titleService: TitleService) {}
  ionViewWillEnter() {
    this.titleService.setTitle(this.title);
  }
  name: string = '';
  apepat: string = '';
  apemat: string = '';

  submit() {
    console.log('submit: ' + this.name + ' ' + this.apepat + ' ' + this.apemat);
    // Log data
  }
}
