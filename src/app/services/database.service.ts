import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Treatment } from '../interfaces/treatment.interface';
import { Doctor } from '../interfaces/doctor.interface';
@Injectable({
  providedIn: 'root'
})
export class DatabaseService{

  constructor(private firebase: Firestore) {}
  
  getTreatments(): Observable<Treatment[]>{
    const placeRef = collection(this.firebase, 'treatments');
    return collectionData(placeRef, {idField: 'id'}) as Observable<Treatment[]>;
  }

  getDoctors(): Observable<Doctor[]>{
    const placeRef = collection(this.firebase, 'aboutUs');
    return collectionData(placeRef, {idField: 'id'}) as Observable<Doctor[]>;
  }

}
