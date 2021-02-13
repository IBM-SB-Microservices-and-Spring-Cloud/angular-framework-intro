import { RouterModule, Routes } from '@angular/router';
import { UsernameComponent } from './username/username.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { InfoComponent } from './info/info.component';
import { AccountComponent } from './account/account.component';
import { BlogComponent } from './blog/blog.component';


const appRoutes: Routes = [
  {path: '', component:UsernameComponent},
  {path: 'blog', component:BlogComponent},
  {path: 'account', component: AccountComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    UsernameComponent,
    InfoComponent,
    AccountComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
