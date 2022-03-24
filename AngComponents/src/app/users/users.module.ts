import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { FilterUsersComponent } from './filter-users/filter-users.component';



@NgModule({
  declarations: [
    UserListComponent,
    FilterUsersComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UserListComponent
  ]
})
export class UsersModule { }
