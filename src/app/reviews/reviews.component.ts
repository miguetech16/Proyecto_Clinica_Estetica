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
  registrado = true;

  constructor (private builder: FormBuilder, private database: DatabaseService, private authUser: AutencaciónUserServiceService) { }

  async ngOnInit() {
    this.reviewForm = this.initForm()

    await this.database.getReviews()
    .subscribe(reviews => {
      this.reviews = reviews
    })

    if(this.authUser.currentUser() != null){
      this.registrado = true;
    }
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

  async onSubmit(){
    if (this.reviewForm.valid){
    this.aparecenErrores = false
    console.log('ReviewForm ->', this.reviewForm.value);
    const response = await this.database.addReview(this.reviewForm.value);
    console.log(response);
  } else {
    this.aparecenErrores = true;
    console.log("Error en el formulario");
  }
}


}
