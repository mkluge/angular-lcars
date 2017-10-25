import { EquipmentService } from './_services/equipment.service';
import { CrewService } from './_services/crew.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { AppRoutingModule } from './app-routing.module';
import { CrewComponent } from './crew/crew.component';
import { CrewListComponent } from './crew/crew-list/crew-list.component';
import { CrewMemberComponent } from './crew/crew-member/crew-member.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { EquipmentListComponent } from './equipment/equipment-list/equipment-list.component';
import { EquipmentItemComponent } from './equipment/equipment-item/equipment-item.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CrewComponent,
    CrewListComponent,
    CrewMemberComponent,
    EquipmentComponent,
    EquipmentListComponent,
    EquipmentItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
