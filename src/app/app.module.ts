import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DogsListComponent } from './dogs-list/dogs-list.component';
import { HttpClientModule } from '@angular/common/http';
import { DogDetailsComponent } from './dog-details/dog-details.component'

import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    DogsListComponent,
    DogDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
