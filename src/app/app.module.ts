import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MenuComponent } from './menu/menu.component';
import { ROUTES } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    SignUpComponent,
    UserProfileComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
