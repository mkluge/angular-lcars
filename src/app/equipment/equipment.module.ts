import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EquipmentDetailsComponent } from './equipment-details/equipment-details.component';
import { EquipmentListComponent } from './equipment-list/equipment-list.component';
import { EquipmentComponent } from './equipment.component';
import { EquipmentRoutingModule } from './equipment-routing.module';

import { EquipmentService } from './../_services/equipment.service';
import { NewEquipmentComponent } from './new-equipment/new-equipment.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    EquipmentRoutingModule
  ],
  declarations: [
    EquipmentComponent,
    EquipmentListComponent,
    EquipmentDetailsComponent,
    NewEquipmentComponent
  ],
  providers: [ EquipmentService ]
})
export class EquipmentModule { }
