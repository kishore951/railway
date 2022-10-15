import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewAllTrainsComponent } from './view-all-trains/view-all-trains.component';

const appRoutes:Routes=[
  {
    path:"",component:ViewAllTrainsComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    ViewAllTrainsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
