import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';
import { Treatment } from '../interfaces/treatment.interface';

@Component({
  selector: 'app-treatments',
  templateUrl: './treatments.component.html',
  styleUrls: ['./treatments.component.css']
})
export class TreatmentsComponent implements OnInit {

  treatments!: Treatment[];

  constructor(private database: DatabaseService){}

  ngOnInit(): void {
      this.database.getTreatments()
      .subscribe(treatments => {
        this.treatments = treatments
      })
  }

}
