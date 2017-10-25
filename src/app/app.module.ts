import { EquipmentService } from './_services/equipment.service';
import { CrewService } from './_services/crew.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { AppRoutingModule } from './app-routing.module';
import { CrewModule } from './crew/crew.module';

import { EquipmentComponent } from './equipment/equipment.component';
import { EquipmentListComponent } from './equipment/equipment-list/equipment-list.component';
import { EquipmentDetailsComponent } from './equipment/equipment-details/equipment-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EquipmentComponent,
    EquipmentListComponent,
    EquipmentDetailsComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    CrewModule,
    AppRoutingModule, // imported last to allow Module routes to be matched first

  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
