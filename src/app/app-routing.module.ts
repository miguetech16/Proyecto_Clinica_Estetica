import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { TreatmentsComponent } from './treatments/treatments.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { TreatmentComponent } from './treatment/treatment.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FaqsComponent } from './faqs/faqs.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  {path:'', redirectTo:'/main', pathMatch:'full' },
  {path:'main', component: MainComponent},
  {path:'treatments', component: TreatmentsComponent},
  {path:'user-register', component: UserRegisterComponent}, 
  {path:'aboutUs', component: AboutUsComponent},
  {path:'treatment/:name', component: TreatmentComponent},
  {path:'promotions', component: PromotionsComponent},
  {path:'faqs', component: FaqsComponent},
  {path:'reviews', component: ReviewsComponent},
  {path:'contactUs', component: ContactUsComponent},
  {path:'**', redirectTo:'/main', pathMatch:'full' }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
