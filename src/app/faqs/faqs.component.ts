import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FaqsComponent {
  title= "FAQs"
  faqs!: any[]
  
  constructor(private database: DatabaseService){}

  ngOnInit(): void {
    this.database.getFaqs()
    .subscribe(faqs => {
      this.faqs = faqs
    })
}

}
