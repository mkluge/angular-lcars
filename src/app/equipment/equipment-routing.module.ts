import { EquipmentComponent } from './equipment.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const crewRoutes = [
  { path: 'equipment', component: EquipmentComponent },
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
