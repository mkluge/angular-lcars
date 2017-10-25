import { CrewRoutingModule } from './crew-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CrewComponent } from './crew.component';
import { CrewListComponent } from './crew-list/crew-list.component';
import { CrewDetailsComponent } from './crew-details/crew-details.component';

import { CrewService } from '../_services/crew.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CrewRoutingModule
  ],
  declarations: [
    CrewComponent,
    CrewListComponent,
    CrewDetailsComponent
  ],
  providers: [ CrewService ]
})
export class CrewModule { }
