import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EntityComponent } from './entity/entity.component';
import { ItemsListComponent } from './itemsList/itemsList.component';
import { ReporterComponent } from './reporter/reporter.component';
import { Reporter2Component } from './reporter2/reporter2.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EntityComponent,
    ReporterComponent,
    Reporter2Component,
    ItemsListComponent
  ],
  imports: [
    BrowserModule,
    MdButtonModule,
    MdCheckboxModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
