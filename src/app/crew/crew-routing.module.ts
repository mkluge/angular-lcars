import { NewCrewComponent } from './new-crew/new-crew.component';
import { CrewComponent } from './crew.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const crewRoutes = [
  { path: 'crew', component: CrewComponent },
  { path: 'crew/new', component: NewCrewComponent },
  { path: 'crew/:id', component: CrewComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(crewRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CrewRoutingModule {}
