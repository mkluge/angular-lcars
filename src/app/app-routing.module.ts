import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EquipmentComponent } from './equipment/equipment.component';
// import { CrewComponent } from './crew/crew.component';

import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

const appRoutes = [
  // { path: 'crew', component: CrewComponent },
  { path: 'equipment', component: EquipmentComponent },
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {

}
