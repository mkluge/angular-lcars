import { componentFactoryName } from '@angular/compiler';
import { EquipmentComponent } from './equipment.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { NewEquipmentComponent } from './new-equipment/new-equipment.component';

const crewRoutes = [
  { path: 'equipment', component: EquipmentComponent },
  { path: 'equipment/new', component: NewEquipmentComponent },
  { path: 'equipment/:id', component: EquipmentComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(crewRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class EquipmentRoutingModule {}
