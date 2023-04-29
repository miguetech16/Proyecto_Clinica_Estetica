import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, doc, docData, addDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Treatment } from '../interfaces/treatment.interface';
import { Promotion } from '../interfaces/promotion.interface';
import { User } from '../interfaces/user.interface';

import { Doctor } from '../interfaces/doctor.interface';
import { user } from '@angular/fire/auth';
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
    const DoctorsRef = collection(this.firebase, 'aboutUs');
    return collectionData(DoctorsRef, {idField: 'id'}) as Observable<Doctor[]>;
  }

  getMain(): Observable<any[]> {
    const MainRef = collection(this.firebase, 'home');
    return collectionData(MainRef, {idField: 'id'});
  }

  getSecondary(): Observable<any[]> {
    const mainRef = collection(this.firebase, 'home');
    const documentRef = doc(mainRef, 'vvdOUW2dO2xMnbmoDub2');
    const secondaryRef = collection(documentRef, 'items');
    return collectionData(secondaryRef, { idField: 'id' });
  }

  getFaqs(): Observable<any[]> {
    const MainRef = collection(this.firebase, 'faq');
    return collectionData(MainRef, {idField: 'id'});
  }

  getUsers(): Observable<any[]> {
    const userRef = collection(this.firebase, 'users');
    return collectionData(userRef, { idField: 'userDni'});
  }

  addUser(User: User) {
    const userRef = collection(this.firebase, 'users');
    return addDoc(userRef, User);
  }

}
