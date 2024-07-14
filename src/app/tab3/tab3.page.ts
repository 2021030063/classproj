import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton } from '@ionic/angular/standalone';
import { TitleService } from '../services/title.service';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [
    IonButton,
    IonCardContent,
    IonCardTitle,
    IonCardHeader,
    IonCard,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
  ],
})
export class Tab3Page {
  title: string = 'CRUD Operations';
  constructor(private titleService: TitleService, private crud: CrudService) {}
  ionViewWillEnter() {
    this.titleService.setTitle(this.title);
  }

  async create() {
    try {
      // Add a new document
      const newData = { field1: 'value1', field2: 'value2' };
      await this.crud.addCustomDocument('collection', 'test', newData);
      console.log('Document added successfully');
    } catch (error) {
      console.error('Error adding document:', error);
    }
  }

  async read() {
    try {
      // Get a document
      const data = await this.crud.getDocument('collection', 'test');
      console.log('Retrieved document:', data);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  async update() {
    try {
      // Update a document
      await this.crud.updateDocument(
        'collection',
        'test',
        'field',
        'new value'
      );
      console.log('Document updated successfully');
    } catch (error) {
      console.error('Error:', error);
    }
  }

  async delete() {
    try {
      // Delete a document
      await this.crud.deleteDocument('collection', 'test');
      console.log('Document deleted successfully');
    } catch (error) {
      console.error('Error:', error);
    }
  }
}
