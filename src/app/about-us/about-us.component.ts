import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';
import { Doctor } from '../interfaces/doctor.interface';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  title = "Nosotros"

  doctors!: Doctor[];

  constructor(private database: DatabaseService){}

  ngOnInit(): void {
      this.database.getDoctors()
      .subscribe(doctors => {
        this.doctors = doctors
      })
  }
}
