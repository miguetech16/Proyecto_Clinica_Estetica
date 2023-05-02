import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DatabaseService } from '../services/database.service';
import { Review } from '../interfaces/review.interface';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit{

  reviewForm!: FormGroup
  reviews!: Review[]
  aparecenErrores = false;

  constructor (private builder: FormBuilder, private database: DatabaseService) { }

  ngOnInit(): void {
    this.reviewForm = this.initForm()
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
