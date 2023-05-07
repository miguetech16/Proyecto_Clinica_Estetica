import { Component, OnDestroy, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';
import { Doctor } from '../interfaces/doctor.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit, OnDestroy {
  title = "Nosotros"

  doctors!: Doctor[];

  suscripcionDoctors!: Subscription


  constructor(private database: DatabaseService){}

  ngOnInit(): void {
      this.suscripcionDoctors = this.database.getDoctors()
      .subscribe(doctors => {
        this.doctors = doctors
      })
  }

  ngOnDestroy(): void {
    this.suscripcionDoctors.unsubscribe();
  }
}
