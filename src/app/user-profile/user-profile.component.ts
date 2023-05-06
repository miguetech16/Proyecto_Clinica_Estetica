import { Component, OnDestroy, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';
import { AutencaciónUserServiceService } from '../services/autencacion-user-service.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from '../interfaces/user.interface';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit, OnDestroy {
  imagenpropia = false
  informacionUsuario!: User
  aparece = false

  suscripcionEstadoUsuario!: Subscription
  suscripcionUsuario!: Subscription

  constructor(private authUser: AutencaciónUserServiceService, private database: DatabaseService, private router: Router){}

  async ngOnInit(){
    this.suscripcionEstadoUsuario = await this.authUser.estadousuario().subscribe(async userstate => {
      if (userstate != null){
        this.suscripcionUsuario = await this.database.getUserwithEmail(userstate?.email!).subscribe(user =>{
          this.informacionUsuario = user[0];
          this.aparece = true
        })
      }
    })
    
  }

  logout(){
    this.authUser.logout();
    this.router.navigate(['main'])
  }

  pedirCita(){
    this.router.navigate(['contactUs'])
  }

  ngOnDestroy(): void {
    this.suscripcionEstadoUsuario.unsubscribe();
    this.suscripcionUsuario.unsubscribe();
  }

}
