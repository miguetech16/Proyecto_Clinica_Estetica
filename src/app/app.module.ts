import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { TreatmentsComponent } from './treatments/treatments.component';
import { FooterComponent } from './footer/footer.component';
import { environment } from '../environments/environment';
import { TreatmentComponent } from './treatment/treatment.component';
import { TitleWithImageComponent } from './title-with-image/title-with-image.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ImageTitleDescriptionComponent } from './image-title-description/image-title-description.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    TreatmentsComponent,
    FooterComponent,
    TreatmentComponent,
    TitleWithImageComponent,
    AboutUsComponent,
    ImageTitleDescriptionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
