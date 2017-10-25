import { EquipmentComponent } from './equipment/equipment.component';
import { CrewComponent } from './crew/crew.component';

import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

const appRoutes = [
  { path: '', component: HomeComponent },
  { path: 'crew', component: CrewComponent },
  { path: 'equipment', component: EquipmentComponent }

];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {

}
