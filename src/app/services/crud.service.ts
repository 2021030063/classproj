import { Injectable } from '@angular/core';
import {
  getFirestore,
  collection,
  addDoc,
  getDoc,
  setDoc,
  doc,
  updateDoc,
  deleteDoc,
  Firestore,
} from '@firebase/firestore/lite';
import { FirebaseService } from '../auth/firebase.service';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  private firestore: Firestore;

  constructor(private firebaseService: FirebaseService) {
    this.firestore = getFirestore(this.firebaseService.getApp);
  }

  async addDocument(collectionName: string, data: any): Promise<String> {
    try {
      const docRef = await addDoc(collection(this.firestore, collectionName), data);
      console.log('Document successfully added with ID:', docRef.id);
      return docRef.id; // Return the document ID
    } catch (error) {
      throw error;
    }
  }

  async addCustomDocument(
    collectionName: string,
    documentId: string,
    data: any
  ): Promise<void> {
    try {
      const docRef = doc(this.firestore, `${collectionName}/${documentId}`);
      await setDoc(docRef, data);
      console.log(`Document with ID ${documentId} successfully added!`);
    } catch (error) {
      console.error('Error adding document:', error);
      throw error;
    }
  }

  async getDocument(collectionName: string, documentId: string): Promise<any> {
    const colRef = collection(this.firestore, collectionName);
    const docRef = doc(colRef, documentId);

    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      console.log('No such document!');
      return null;
    }
  }

  async updateDocument(
    collectionName: string,
    documentId: string,
    field: string,
    value: any
  ): Promise<void> {
    const docRef = doc(collection(this.firestore, collectionName), documentId);
    await updateDoc(docRef, { [field]: value });
    console.log('Document successfully updated!');
  }

  async deleteDocument(
    collectionName: string,
    documentId: string
  ): Promise<void> {
    const docRef = doc(collection(this.firestore, collectionName), documentId);
    await deleteDoc(docRef);
    console.log('Document successfully deleted!');
  }
}
