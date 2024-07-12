import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonButton } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { TitleService } from '../services/title.service';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonButton, IonCardTitle, IonCardHeader, IonCardContent, IonCard,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    ExploreContainerComponent,
  ],
})
export class Tab2Page {
  title: string = 'Tab 2';
  constructor(private titleService: TitleService, private crud: CrudService) {}
  ionViewWillEnter() {
    this.titleService.setTitle(this.title);
  }
  async create(){
    try {
      // Add a new document
      const newData = { field1: 'value1', field2: 'value2' };
      await this.crud.addCustomDocument('collection', 'test', newData);
      console.log('Document added successfully');
    } catch (error) {
      console.error('Error adding document:', error);
    }
  }
  async read(){
    try {
      // Get a document
      const data = await this.crud.getDocument('collection', 'test');
      console.log('Retrieved document:', data);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  async update(){
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
  async delete(){
    try {
      // Delete a document
      await this.crud.deleteDocument('collection', 'test');
      console.log('Document deleted successfully');
    } catch (error) {
      console.error('Error:', error);
    }
  }
}
