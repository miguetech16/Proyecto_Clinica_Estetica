import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';
import { Observable } from 'rxjs';
import { Promotion } from '../interfaces/promotion.interface';

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.css']
})
export class PromotionsComponent implements OnInit {
  promotions_observable!: Observable<Promotion[]>
  title = "Promociones";

  constructor(private databaseService: DatabaseService){}

  ngOnInit(): void {
    this.promotions_observable = this.databaseService.getPromotions();
  }
}
