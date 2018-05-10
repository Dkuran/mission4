import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { ShowUserComponent } from './show-user/show-user.component';
import { UserService } from './user.service';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule
  ],
  providers: [UserService],
  declarations: [ShowUserComponent]
})
export class UsersModule { }
