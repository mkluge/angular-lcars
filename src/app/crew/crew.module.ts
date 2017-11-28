import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CrewComponent } from './crew.component';
import { CrewListComponent } from './crew-list/crew-list.component';
import { CrewDetailsComponent } from './crew-details/crew-details.component';
import { CrewRoutingModule } from './crew-routing.module';

import { CrewService } from '../_services/crew.service';
import { NewCrewComponent } from './new-crew/new-crew.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CrewRoutingModule
  ],
  declarations: [
    CrewComponent,
    CrewListComponent,
    CrewDetailsComponent,
    NewCrewComponent
  ],
  providers: [ CrewService ]
})
export class CrewModule { }
