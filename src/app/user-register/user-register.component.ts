import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DatabaseService } from '../services/database.service';
import { User } from '../interfaces/user.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})

export class UserRegisterComponent implements OnInit{
 
 singupForm!: FormGroup;
 users!: User[];
 exist: boolean = false;
 userError: string = "Este usuario ya se encuentra registrado."

 constructor (private builder: FormBuilder, private database: DatabaseService, private router: Router) { }

 ngOnInit(): void {
  this.singupForm = this.initForm()

  this.database.getUsers()
  .subscribe(users => {this.users = users})
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
    confirmPassword: new FormControl('',[
      Validators.required,     
      Validators.minLength(6),  
    ])
  })
}


passwordConfirmation(){
  const password = this.singupForm.get('password');
  const confirmPassword = this.singupForm.get('confirmPassword');

  if (password != confirmPassword) {
    return false;
  }
  return true;
}


userValidation(){
  for (let user of this.users){
    if (this.singupForm.value.userDNI == user.userDNI){
      this.userError = "El DNI introducido coincide con uno ya registrado."
      this.exist = true;
    } else if (this.singupForm.value.userEmail == user.userEmail){
      this.userError = "El correo electrónico introducido coincide con uno ya registrado."
      this.exist = true;
    } else if (this.singupForm.value.phoneNumber == user.phoneNumber){
      this.userError = "El número de teléfono introducido coincide con uno ya registrado."
      this.exist = true;
    }
  }
}

 async onSubmit(){
  this.exist = false;
  if (this.singupForm.valid){
    console.log('UserRegisterForm ->', this.singupForm.value);

    this.userValidation();
    if (!this.exist){
    const response = await this.database.addUser(this.singupForm.value);
    console.log(response);
    this.router.navigate(['/main']);
    }
  }
 }
 

}



