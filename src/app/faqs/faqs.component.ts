import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';
import { Faq } from '../interfaces/faq.interface';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FaqsComponent {
  title= "FAQs"
  faqs!: Faq[]
  
  constructor(private database: DatabaseService){}

  ngOnInit(): void {
    this.database.getFaqs()
    .subscribe(faqs => {
      this.faqs = faqs
    })
}

}
