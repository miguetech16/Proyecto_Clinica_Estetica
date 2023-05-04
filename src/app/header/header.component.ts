import { Component, OnInit } from '@angular/core';
import { AutencaciónUserServiceService } from '../services/autencacion-user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  constructor(private authUser: AutencaciónUserServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  iconousuario(){
    console.log(this.authUser.currentUser())
    if(this.authUser.currentUser() == null){
      this.router.navigate(['user-login'])
    }
    else{
      this.router.navigate(['contactUs'])  
    }
    //this.authUser.logout()
  }
}
