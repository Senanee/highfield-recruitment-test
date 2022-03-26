import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ReactiveFormsModule, FormsModule} from '@angular/forms'

import {MaterialModule} from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexUserComponent } from './home/user/index-user/index-user.component';
import { MenuComponent } from './menu/menu/menu.component';
import { GenericListComponent } from './utilities/generic-list/generic-list.component';
import { IndexColourComponent } from './home/colours/index-colour/index-colour.component';
import{MatPaginatorModule } from '@angular/material/paginator'

@NgModule({
  declarations: [
    AppComponent,
    GenericListComponent,
    IndexUserComponent,
    MenuComponent,
    GenericListComponent,
    IndexColourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
