import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { TreatmentsComponent } from './treatments/treatments.component';
import { TreatmentComponent } from './treatment/treatment.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FaqsComponent } from './faqs/faqs.component';

const routes: Routes = [
  {path:'', redirectTo:'/main', pathMatch:'full' },
  {path:'main', component: MainComponent},
  {path:'treatments', component: TreatmentsComponent},  
  {path:'aboutUs', component: AboutUsComponent},
  {path:'treatment/:name', component: TreatmentComponent},
  {path:'promotions', component: PromotionsComponent},
  {path:'faqs', component: FaqsComponent},
  {path:'**', redirectTo:'/main', pathMatch:'full' }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
