import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, doc, docData, addDoc, query, where, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Treatment } from '../interfaces/treatment.interface';
import { Promotion } from '../interfaces/promotion.interface';
import { User } from '../interfaces/user.interface';

import { Doctor } from '../interfaces/doctor.interface';
import { Review } from '../interfaces/review.interface';
import { Contact } from '../interfaces/contact.interface';
import { Faq } from '../interfaces/faq.interface';
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

  getReviews(): Observable<Review[]> {
    const MainRef = collection(this.firebase, 'reviews');
    return collectionData(MainRef, {idField: 'id'}) as Observable<Review[]>;;
  }

  getReviewwithEmail(email:string): Observable<Review[]> {
    const q = query(collection(this.firebase, 'reviews'), where('userEmail','==', email))
    return collectionData(q, {idField: 'id'}) as Observable<Review[]>;;
  }
  
  getFaqs(): Observable<Faq[]> {
    const faqsRef = collection(this.firebase, 'faq');
    return collectionData(faqsRef, {idField: 'id'}) as Observable<Faq[]>;
  }

  getDoctors(): Observable<Doctor[]>{
    const DoctorsRef = collection(this.firebase, 'aboutUs');
    return collectionData(DoctorsRef, {idField: 'id'}) as Observable<Doctor[]>;
  }

  getUsers(): Observable<User[]> {
    const userRef = collection(this.firebase, 'users');
    return collectionData(userRef, { idField: 'userDni'}) as Observable<User[]>;
  }

  updateImageUser(idUser: string, fullpat: string){
    const docRef = doc(this.firebase, `users/${idUser}`);
    updateDoc(docRef, {userImage: fullpat});
  }

  updateAllergiesInformation(idUser: string, information: string){
    const docRef = doc(this.firebase, `users/${idUser}`);
    updateDoc(docRef, {Alergias: information});
  }

  getUserwithEmail(email:string): Observable<User[]>{
    const q = query(collection(this.firebase, 'users'), where('userEmail','==', email));
    return collectionData(q, { idField: 'id' }) as Observable<User[]>;
  }

  updateReview(id: string,new_review: Review){
    const docu = doc(this.firebase, `reviews/${id}`);
    updateDoc(docu, {valoration: new_review.valoration, reviewTitle: new_review.reviewTitle, review: new_review.review});
  }

  getMain(): Observable<any[]> {
    const MainRef = collection(this.firebase, 'home');
    return collectionData(MainRef, {idField: 'id'});
  }
  
  getItemsMain(): Observable<any[]>{
    const secondaryRef = collection(this.firebase, 'home/homeInformation/items');
    return collectionData(secondaryRef, { idField: 'id' })
  }

  getInfoCards(): Observable<any[]> {
    const infoCardRef = collection(this.firebase, 'contactUs');
    return collectionData(infoCardRef, { idField: 'id' });
  }

  addUser(User: User) {
    const userRef = collection(this.firebase, 'users');
    return addDoc(userRef, User);
  }
  
  addReview(Review: Review) {
    const reviewRef = collection(this.firebase, 'reviews');
    return addDoc(reviewRef, Review);
  }
  
  addContactMessage(Message: Contact) {
    const reviewRef = collection(this.firebase, 'contactMessages');
    return addDoc(reviewRef, Message);
  }

}
