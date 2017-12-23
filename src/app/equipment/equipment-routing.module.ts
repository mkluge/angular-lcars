import { componentFactoryName } from '@angular/compiler';
import { EquipmentComponent } from './equipment.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { NewEquipmentComponent } from './new-equipment/new-equipment.component';

const equipmentRoutes = [
  { path: 'equipment/new', component: NewEquipmentComponent },
  { path: 'equipment/:id', component: EquipmentComponent },
  { path: 'equipment', component: EquipmentComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(equipmentRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class EquipmentRoutingModule {}
