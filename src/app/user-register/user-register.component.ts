import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})

export class UserRegisterComponent implements OnInit{
 
 singupForm!: FormGroup

 constructor (private builder: FormBuilder) { }

 ngOnInit() {
  this.singupForm = this.initForm()
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
    phoneNumber: new FormControl('', [
      Validators.required,
      Validators.pattern("[0-9]{9}"),
    ]),
    userDNI: new FormControl('', [
      Validators.required,
      Validators.pattern("[0-9]{8}[A-Za-z]"),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  })
}


 validateForm() {
  if (this.singupForm.valid){
    console.log('UserRegisterForm ->', this.singupForm.value)
  }
 }

 

}



