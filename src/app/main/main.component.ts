import { Component } from '@angular/core';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  title= "Clínicas LMR"
  main!: any[];
  secondary!: any[];

  constructor(private database: DatabaseService){}

  ngOnInit(): void {     
     
      this.database.getMain()
      .subscribe(main => {
        this.main = main
      })

      this.database.getSecondary()
      .subscribe(secondary => {
        this.secondary = secondary;
        
      })

  }

}
