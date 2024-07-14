import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonButton, IonItem, IonLabel, IonList, IonSpinner } from '@ionic/angular/standalone';
import { TitleService } from '../services/title.service';
import { CrudService } from '../services/crud.service';
import { SharedModule } from "../shared/shared.module";
import { HeaderComponent } from "../components/header/header.component";
import { StudentsService } from '../services/students.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonSpinner, IonList, IonLabel, IonItem,
    IonCardTitle,
    IonCardHeader,
    IonCardContent,
    IonCard,
    IonButton,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    SharedModule,
    IonContent,
    HeaderComponent,
  ],
})
export class Tab2Page {
  title: string = 'Estudiantes';
  students: any[] = [];

  constructor(
    private titleService: TitleService,
    public studentsService: StudentsService
  ) {}
  ionViewWillEnter() {
    this.titleService.setTitle(this.title);
  }
  async ngOnInit() {
    await this.studentsService.getStudents();
    this.students = this.studentsService.students;
    this.studentsService.results = this.students; // Initialize results to all students
  }
}
