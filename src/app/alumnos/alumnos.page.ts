import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonLabel, IonItem } from '@ionic/angular/standalone';
import { HeaderComponent } from "../components/header/header.component";

interface Alumno {
  id: number;
  nombre: string;
  apellido: string;
  edad: number;
}

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.page.html',
  styleUrls: ['./alumnos.page.scss'],
  standalone: true,
  imports: [IonItem, IonLabel, IonList, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent]
})
export class AlumnosPage implements OnInit {
  title: string = "Alumnos";
  constructor() { }

  ngOnInit() {
  }
  alumnos: Alumno[] = [
    { id: 1, nombre: 'Juan', apellido: 'Perez', edad: 20 },
    { id: 2, nombre: 'Maria', apellido: 'Gomez', edad: 22 },
    { id: 3, nombre: 'Pedro', apellido: 'Jimenez', edad: 21 },
    { id: 4, nombre: 'Ana', apellido: 'Lopez', edad: 23 }
  ];

}
