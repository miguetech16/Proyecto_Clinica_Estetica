import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import {provideStorage, getStorage} from'@angular/fire/storage';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { TreatmentsComponent } from './treatments/treatments.component';
import { FooterComponent } from './footer/footer.component';
import { environment } from '../environments/environment';
import { TreatmentComponent } from './treatment/treatment.component';
import { ImageCardComponent } from './image-card/image-card.component';
import { ImageDescriptionButtonComponent } from './image-description-button/image-description-button.component';
import { CardComponent } from './card/card.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { TitleWithImageComponent } from './title-with-image/title-with-image.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ImageTitleDescriptionComponent } from './image-title-description/image-title-description.component';
import { FaqsComponent } from './faqs/faqs.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    TreatmentsComponent,
    FooterComponent,
    TreatmentComponent,
    ImageCardComponent,
    ImageDescriptionButtonComponent,
    CardComponent,
    PromotionsComponent,
    TitleWithImageComponent,
    AboutUsComponent,
    ImageTitleDescriptionComponent,
    FaqsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
