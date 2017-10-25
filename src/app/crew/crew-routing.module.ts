import { CrewComponent } from './crew.component';
import { CrewDetailsComponent } from './crew-details/crew-details.component';
import { CrewListComponent } from './crew-list/crew-list.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const crewRoutes = [
  { path: 'crew', component: CrewComponent },
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
