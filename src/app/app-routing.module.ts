import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexColourComponent } from './home/colours/index-colour/index-colour.component';
import { IndexUserComponent } from './home/user/index-user/index-user.component';

const routes: Routes = [
  {path: '', component: IndexUserComponent},
  {path: 'users', component: IndexUserComponent},
  {path: 'colours', component: IndexColourComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
