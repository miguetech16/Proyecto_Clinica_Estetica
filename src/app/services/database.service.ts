import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, doc, docData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Treatment } from '../interfaces/treatment.interface';
import { Promotion } from '../interfaces/promotion.interface';

import { Doctor } from '../interfaces/doctor.interface';
@Injectable({
  providedIn: 'root'
})
export class DatabaseService{

  constructor(private firebase: Firestore) {}
  
  getTreatments(): Observable<Treatment[]>{
    const treatmentsRef = collection(this.firebase, 'treatments');
    return collectionData(treatmentsRef, {idField: 'id'}) as Observable<Treatment[]>;
  }

  getTreatment(id:string): Observable<Treatment>{
    const docRef = doc(this.firebase, `treatments/${id}`);
    return docData(docRef) as Observable<Treatment>;
  }

  getPromotions(): Observable<Promotion[]>{
    const promotionsRef = collection(this.firebase, 'promotions');
    return collectionData(promotionsRef, {idField: 'id'}) as Observable<Promotion[]>;
  }

  getDoctors(): Observable<Doctor[]>{
    const placeRef = collection(this.firebase, 'aboutUs');
    return collectionData(placeRef, {idField: 'id'}) as Observable<Doctor[]>;
  }

}
