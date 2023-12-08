import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FriendListComponent } from './friend-list/friend-list.component';
import { FriendDetailComponent } from './friend-detail/friend-detail.component';
import { FriendEditComponent } from './friend-edit/friend-edit.component';
import { FriendAddComponent } from './friend-add/friend-add.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FriendListComponent,
    FriendDetailComponent,
    FriendEditComponent,
    FriendAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
