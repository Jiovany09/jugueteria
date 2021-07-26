import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class JugueteriaFirebaseService {

  constructor(private firestore: AngularFirestore) { }

  public getJuguetes() {
    return this.firestore.collection('juguetes').snapshotChanges();
  }
}
