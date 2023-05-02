import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DatabaseService } from '../services/database.service';
import { Contact } from '../interfaces/contact.interface'
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit{

contactForm!: FormGroup
contact!: Contact
aparecenErrores: boolean = false
infoCard!: any[]

constructor(private builder: FormBuilder, private database: DatabaseService, private router: Router ) { }

ngOnInit(): void {
  this.contactForm = this.initForm();

  this.database.getInfoCards()
  .subscribe(infoForCards => {
    this.infoCard = infoForCards;

    console.log(this.infoCard)
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

    phoneNumber: new FormControl('', [
      Validators.required,
      Validators.pattern(/[0-9]{9}$/),
      Validators.max(999999999),
    ]),

    subject: new FormControl('', [
      Validators.required,
    ]),

    message: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(200),
    ])
  })
}

async onSubmit(){
  if (this.contactForm.valid){
  this.aparecenErrores = false
  console.log('contactForm ->', this.contactForm.value);
  const response = await this.database.addContactMessage(this.contactForm.value);
  console.log(response);
  this.router.navigate(['/main']);
} else {
  this.aparecenErrores = true;
  console.log("Error en el formulario");
 }
}

}
