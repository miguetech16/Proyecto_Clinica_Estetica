import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { TreatmentsComponent } from './treatments/treatments.component';
import { UserRegisterComponent } from './user-register/user-register.component';

const routes: Routes = [
  {path:'', redirectTo:'/main', pathMatch:'full' },
  {path:'main', component: MainComponent},
  {path:'treatments', component: TreatmentsComponent},
  {path:'user-register', component: UserRegisterComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
