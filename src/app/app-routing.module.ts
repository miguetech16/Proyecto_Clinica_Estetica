import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { TreatmentsComponent } from './treatments/treatments.component';
import { TreatmentComponent } from './treatment/treatment.component';

const routes: Routes = [
  {path:'', redirectTo:'/main', pathMatch:'full' },
  {path:'main', component: MainComponent},
  {path:'treatments', component: TreatmentsComponent},
  {path:'treatment/:name', component: TreatmentComponent},
  {path:'**', redirectTo:'/main', pathMatch:'full' }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
