import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FriendDetailComponent } from './friend-detail/friend-detail.component';
import { FriendListComponent } from './friend-list/friend-list.component';
import { FriendAddComponent } from './friend-add/friend-add.component';

const routes: Routes = [
  {
    path: 'add-friend', component: FriendAddComponent
  },
  { path: 'friends', component: FriendListComponent },
  { path: 'friend/:id', component: FriendDetailComponent },
  {
    path: '', redirectTo: '/friends', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
