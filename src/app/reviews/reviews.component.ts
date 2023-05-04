import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DatabaseService } from '../services/database.service';
import { Review } from '../interfaces/review.interface';
import { AutencaciónUserServiceService } from '../services/autencacion-user-service.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit{

  reviewForm!: FormGroup
  reviews!: Review[]
  aparecenErrores = false;
  registrado = false;
  ReviewRealizada = false;
  modificandoReview = false;
  aparece = false;

  constructor (private builder: FormBuilder, private database: DatabaseService, private authUser: AutencaciónUserServiceService) { }

  async ngOnInit() {
    await this.authUser.estadousuario().subscribe(user => {
      if ( user != null){
        this.registrado = true;
        this.database.getUserwithEmail(user.email!).subscribe( async user => {
          this.reviewForm.controls['userName'].setValue(user[0].userName);
          this.reviewForm.controls['userName'].disable();
          this.reviewForm.controls['userEmail'].setValue(user[0].userEmail);
          this.reviewForm.controls['userEmail'].disable();
          await this.database.getReviewwithEmail(user[0].userEmail).subscribe( reviews => {
            if (reviews[0] != undefined){
              this.reviewForm.controls['valoration'].setValue(reviews[0].valoration);
              this.reviewForm.controls['reviewTitle'].setValue(reviews[0].reviewTitle);
              this.reviewForm.controls['review'].setValue(reviews[0].review);
              this.reviewForm.controls['valoration'].disable();
              this.reviewForm.controls['reviewTitle'].disable();
              this.reviewForm.controls['review'].disable();
              this.ReviewRealizada = true;
            } else{
              this.reviewForm.controls['valoration'].setValue("");
              this.reviewForm.controls['reviewTitle'].setValue("");
              this.reviewForm.controls['review'].setValue("");
              this.reviewForm.controls['valoration'].enable();
              this.reviewForm.controls['reviewTitle'].enable();
              this.reviewForm.controls['review'].enable();
              this.ReviewRealizada = false;
            }
          })
        })
      }
    })

    this.aparece = true

    this.reviewForm = this.initForm()

    await this.database.getReviews()
    .subscribe(reviews => {
      this.reviews = reviews
    })
  }

  initForm(): FormGroup {
    return this.builder.group({
  
      userName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(15),
      ]),

      userEmail: new FormControl('', [
        Validators.required,
        Validators.pattern("[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,4}$"),
      ]),

      valoration: new FormControl('', [
        Validators.required,
        Validators.pattern("[0-5]{1}"),
      ]),

      reviewTitle: new FormControl('', [
        Validators.required,
      ]),

      review: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(200),
      ])
    })
  }

  modoEdicion(){
    this.modificandoReview = true
    this.aparecenErrores = true;
    this.reviewForm.controls['valoration'].enable();
    this.reviewForm.controls['reviewTitle'].enable();
    this.reviewForm.controls['review'].enable();
  }

  guardarEdicion(){
    this.modificandoReview = false;
    this.aparecenErrores = false;
    this.reviewForm.controls['valoration'].disable();
    this.reviewForm.controls['reviewTitle'].disable();
    this.reviewForm.controls['review'].disable();
  }

  cacelarEdicion(){
    this.modificandoReview = false;
    this.aparecenErrores = false;
    this.reviewForm.controls['valoration'].disable();
    this.reviewForm.controls['reviewTitle'].disable();
    this.reviewForm.controls['review'].disable();
  }

  async onSubmit(){
    if (this.reviewForm.valid){
      this.reviewForm.controls['userName'].enable();
      this.reviewForm.controls['userEmail'].enable();
      this.aparecenErrores = false
      await this.database.addReview(this.reviewForm.value);
      this.reviewForm.controls['userName'].disable();
      this.reviewForm.controls['userEmail'].disable();
      this.reviewForm.controls['valoration'].disable();
      this.reviewForm.controls['reviewTitle'].disable();
      this.reviewForm.controls['review'].disable();
      this.reviewForm.controls['valoration'].setValue("");
      this.reviewForm.controls['reviewTitle'].setValue("");
      this.reviewForm.controls['review'].setValue("");
    } else {
      this.aparecenErrores = true;
      console.log("Error en el formulario");
    }
  }


}
