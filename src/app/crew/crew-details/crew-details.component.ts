import { Crew } from './../../_models/crew';
import { Component, OnInit, Input } from '@angular/core';
import { AfterContentInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-crew-details',
  templateUrl: './crew-details.component.html',
  styleUrls: ['./crew-details.component.css']
})
export class CrewDetailsComponent implements OnInit {
  @Input() crew: Crew;
  // fullName: string;

  constructor() { }

  ngOnInit() {}

  getFullname() {
    console.log('Inside getFullName: ' + this.crew.surname);
    if (this.crew.isBajoran) {
      return this.crew.surname + ' ' + this.crew.givenName;
    }
    return this.crew.givenName + ' ' + this.crew.surname;
  }

} // end class
