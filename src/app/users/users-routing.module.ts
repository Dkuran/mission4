import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowUserComponent } from './show-user/show-user.component';

const routes: Routes = [
  {
    path: ':id', component: ShowUserComponent
    // path: ':id', children: [
    //   {path: 'user/id:', component: ShowUserComponent}
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
