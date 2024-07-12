import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { HeaderComponent } from "../components/header/header.component";
import { TitleService } from '../services/title.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, HeaderComponent],
})
export class Tab1Page {
  title: string = 'Tab 1';
  constructor(private titleService: TitleService) {}
  ionViewWillEnter() {
    this.titleService.setTitle(this.title);
  }
}
