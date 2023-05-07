import { Component, OnDestroy, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnDestroy{
  title= "Clínicas LMR"
  main!: any[];
  secondary!: any[];

  suscripcionInfoMain!: Subscription
  suscripcionInfoItems!: Subscription

  constructor(private database: DatabaseService){}

  async ngOnInit(){     
     
      this.suscripcionInfoMain = await this.database.getMain()
      .subscribe(main => {
        this.main = main
      })

      this.suscripcionInfoItems = await this.database.getItemsMain()
      .subscribe(secondary => {
      this.secondary = secondary;
        
      })
  }

  ngOnDestroy(): void {
    this.suscripcionInfoMain.unsubscribe();
    this.suscripcionInfoItems.unsubscribe();
  }

}
