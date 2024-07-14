import { Injectable } from '@angular/core';
import {
  getFirestore,
  collection,
  addDoc,
  getDoc,
  getDocs,
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
export class StudentsService {
  private db: Firestore;
  public isLoading: boolean = false;
  public students: any[] = [];
  public results: any[] = [];
  public noResultsFound = false;

  constructor(
    private firebaseService: FirebaseService
  ) {
    this.db = getFirestore(this.firebaseService.getApp);
  }

  async getStudents() {
    const querySnapshot = await getDocs(collection(this.db, 'estudiantes'));
    this.students = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    //console.log(this.students);
  }

  public async handleInput(event: any) {
    const query = event.target.value.toLowerCase();
    this.results = this.students.filter((student) => {
      return (
        student['first-name'].toLowerCase().indexOf(query) > -1 ||
        student['last-name'].toLowerCase().indexOf(query) > -1 ||
        student.city.toLowerCase().indexOf(query) > -1 ||
        student.age.toString().toLowerCase().indexOf(query) > -1
      );
    });

    this.noResultsFound = this.results.length === 0;
  }
}
