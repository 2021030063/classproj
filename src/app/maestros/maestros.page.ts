import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonLabel, IonList, IonItem, IonButton, IonCard, IonCardContent, IonCardTitle } from '@ionic/angular/standalone';
import { HeaderComponent } from "../components/header/header.component";
import { TitleService } from '../services/title.service';
import { FormsModule } from '@angular/forms';

interface Maestro {
  id: number;
  nombre: string;
  ape: string;
  edad: number;
}
@Component({
  selector: 'app-maestros',
  templateUrl: 'maestros.page.html',
  styleUrls: ['maestros.page.scss'],
  standalone: true,
  imports: [IonCardTitle,
    IonCardContent,
    IonCard,
    IonButton,
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
    IonCardContent,
  ],
})

export class MaestrosPage {
  title: string = 'Maestros';
  constructor(private titleService: TitleService) {}

  ionViewWillEnter() {
    this.titleService.setTitle(this.title);
  }

  nombre: string = '';
  ape: string = '';
  edad: number = 0;
  previousId: number = 0;

  maestros: Maestro[] = [
    { id: 1, nombre: 'Juan', ape: 'Perez', edad: 20 },
    { id: 2, nombre: 'Maria', ape: 'Gomez', edad: 22 },
    { id: 3, nombre: 'Pedro', ape: 'Jimenez', edad: 21 },
    { id: 4, nombre: 'Ana', ape: 'Lopez', edad: 23 },
  ];

  submit() {
    console.log('submit: ' + this.nombre + ' ' + this.ape + ' ' + this.edad);
    var lastIndex = this.maestros[this.maestros.length - 1].id;
    var newMaestro: Maestro = {
      id: lastIndex,
      nombre: this.nombre,
      ape: this.ape,
      edad: this.edad
    };
    this.maestros.push(newMaestro);
  }
}
