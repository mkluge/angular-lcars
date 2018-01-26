import { CrewListComponent } from './crew-list/crew-list.component';
import { Component, OnInit } from '@angular/core';
import { Crew } from '../_models/crew';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {
  title = 'Crew List';
  selectedCrew: Crew;

  constructor() { }

  ngOnInit() {
  }

  onCrewSelected(crew) {
    this.selectedCrew = crew;
  }

}
