import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { DatabaseService } from '../services/database.service';
import { User } from '../interfaces/user.interface';
import { Router } from '@angular/router';
import { AutencaciónUserServiceService } from '../services/autencacion-user-service.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent {
  loginForm!: FormGroup;
  users!: User[];
  aparecenErrores = false;
  exist: boolean = true;
  userError: string = '';

  constructor(
    private builder: FormBuilder,
    private database: DatabaseService,
    private router: Router,
    private userAuth: AutencaciónUserServiceService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.initForm();

    this.database.getUsers().subscribe((users) => {
      this.users = users;
    });
  }

  initForm(): FormGroup {
    return this.builder.group({
      userEmail: [
        '',
        [
          Validators.required,
          Validators.pattern(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,4}$/),
        ],
      ],
      password: ['', [Validators.required]],
    });
  }

  async userValidation() {
    await this.userAuth
      .fetchEmail(this.loginForm.value.userEmail)
      .then((res) => {
        if (res.length === 0) {
          this.exist = false;
          this.userError = 'Este usuario no está registrado.';
        }
      });
  }

  login(email: string, password: string) {
    this.userAuth.login(email, password).then(
      (res) => {
        this.router.navigate(['/user-profile']);
      },
      (err) => {
        this.userError = 'Contraseña incorrecta.';
        this.exist = false;
      }
    );
  }

  async onSubmit() {
    this.exist = true;
    this.aparecenErrores = true;
    if (this.loginForm.valid) {
      await this.userValidation();
      if (this.exist) {
        this.login(
          this.loginForm.value.userEmail,
          this.loginForm.value.password
        );
      }
    }
  }
}
