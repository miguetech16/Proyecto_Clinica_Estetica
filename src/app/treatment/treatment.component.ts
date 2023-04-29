import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Treatment } from '../interfaces/treatment.interface';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-treatment',
  templateUrl: './treatment.component.html',
  styleUrls: ['./treatment.component.css']
})
export class TreatmentComponent implements OnInit, OnDestroy {
  treatment!: Treatment;
  suscription!: Subscription;
  aparecer = false;

  constructor(private router: Router, private databaseService: DatabaseService){}

  ngOnInit(): void{
    this.suscription = this.databaseService.getTreatment(this.router.url.split("/")[2])
    .subscribe(treatment => {
      this.treatment = treatment;
      if (this.treatment == null || this.treatment == undefined){
        this.router.navigate(['/treatments']);
      }
      this.aparecer = true;
    });
  }

  ngOnDestroy(): void {
      this.suscription.unsubscribe();
  }

}
