import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FriendListComponent } from './friend-list/friend-list.component';
import { FriendDetailComponent } from './friend-detail/friend-detail.component';
import { FriendEditComponent } from './friend-edit/friend-edit.component';
import { FriendAddComponent } from './friend-add/friend-add.component';
import { FormsModule } from '@angular/forms';

// Importações para a localização
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { LOCALE_ID } from '@angular/core';

// Registra o locale pt-BR
registerLocaleData(localePt);

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
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' } // Configura o LOCALE_ID para pt-BR
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
