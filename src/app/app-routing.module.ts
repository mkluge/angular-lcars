import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';

const appRoutes = [
  // { path: 'crew', component: CrewComponent }, /* Crew routing now handed in CrewModule */
  // { path: 'equipment', component: EquipmentComponent },/* Equipment routing now handled in EquipmentModule */
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {

}
