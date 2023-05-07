import { Component, OnDestroy, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';
import { Faq } from '../interfaces/faq.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FaqsComponent implements OnInit, OnDestroy {
  title= "FAQs"
  faqs!: Faq[]
  
  suscripcionFAQS!: Subscription


  constructor(private database: DatabaseService){}

  ngOnInit(){
    this.suscripcionFAQS = this.database.getFaqs()
    .subscribe(faqs => {
      this.faqs = faqs
    })
  }

  ngOnDestroy(){
    this.suscripcionFAQS.unsubscribe();
  }

}
