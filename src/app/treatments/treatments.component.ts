import { Component, OnDestroy, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';
import { Treatment } from '../interfaces/treatment.interface';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-treatments',
  templateUrl: './treatments.component.html',
  styleUrls: ['./treatments.component.css']
})
export class TreatmentsComponent implements OnInit {
  treatments!: Observable<Treatment[]>;
  

  constructor(private database: DatabaseService){}

  ngOnInit(): void {
    this.treatments = this.database.getTreatments();
  }

  /** 
  subscription!: Subscription;
  ngOnDestroy(): void {
    this.subscription.unsubscribe;
  }
  */

  

}
