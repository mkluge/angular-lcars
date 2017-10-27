import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { AppRoutingModule } from './app-routing.module';
import { CrewModule } from './crew/crew.module';
import { EquipmentModule } from './equipment/equipment.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    CrewModule,
    EquipmentModule,
    AppRoutingModule, // imported last to allow Module routes to be matched first

  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
