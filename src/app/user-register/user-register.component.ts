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
 aparecenErrores = false;
 contradistintas = true;
 userError: string = "Este usuario ya se encuentra registrado."

 constructor (private builder: FormBuilder, private database: DatabaseService, private router: Router) { }

 ngOnInit(): void {
  this.singupForm = this.initForm()

  this.database.getUsers()
  .subscribe(users => {this.users = users})
 }

initForm(): FormGroup {
  return this.builder.group({

    userName: ['', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(15),
    ]],
    userEmail: ['', [
      Validators.required,
      Validators.pattern(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,4}$/)
    ]],
    phoneNumber: ['', [
      Validators.required,
      Validators.pattern(/[0-9]{9}$/),
      Validators.max(999999999),
    ]],
    userDNI: ['', [
      Validators.required,
      Validators.pattern(/[0-9]{8}[A-Za-z]/),
      Validators.maxLength(9)
    ]],
    password: ['', [
      Validators.required,
      Validators.minLength(6)
    ]],
    confirmPassword: ['',[
      Validators.required,     
      Validators.minLength(6)
    ]]
  })
}


passwordConfirmation(){
  const password = this.singupForm.get('password')?.value;
  const confirmPassword = this.singupForm.get('confirmPassword')?.value;
  if ((password == confirmPassword) && (password != "")) {
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

onSubmit(){
  this.exist = false;
  this.aparecenErrores = true
  this.contradistintas = this.passwordConfirmation();
  console.log(this.contradistintas)
  if (this.singupForm.valid){
    console.log('UserRegisterForm ->', this.singupForm.value);
    

    this.userValidation();
    if (!this.exist){
    //const response = await this.database.addUser(this.singupForm.value);
    //console.log(response);
    //this.router.navigate(['/main']);
    }
  }
 }
 

}



