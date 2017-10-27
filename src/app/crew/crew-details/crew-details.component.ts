import { Crew } from './../../_models/crew';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-crew-details',
  templateUrl: './crew-details.component.html',
  styleUrls: ['./crew-details.component.css']
})
export class CrewDetailsComponent implements OnInit {
  @Input() crew: Crew;

  constructor() { }

  ngOnInit() {

  }

} // end class
