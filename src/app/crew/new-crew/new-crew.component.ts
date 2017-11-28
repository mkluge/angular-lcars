import { Router } from '@angular/router';
import { CrewService } from '../../_services/crew.service';
import { NgForm } from '@angular/forms';
import { Crew } from './../../_models/crew';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-new-crew',
  templateUrl: './new-crew.component.html',
  styleUrls: ['./new-crew.component.css']
})
export class NewCrewComponent implements OnInit {
  @ViewChild('crwForm') crewForm: NgForm;
  public crew: Crew;

  constructor(private crewService: CrewService, private router: Router) { }

  ngOnInit() {

    this.crew = {
      id: 0,
      surname: '',
      givenName: '',
      // birthYear: 0,
      // birthPlace: '',
      isBajoran: false,
      rank: '',
      position: '',
      actor: '',
      imageUrl: '',
      bio: '',
    };

  }

  onSubmit(formValue) {
    this.crew = formValue;
    this.crewService.saveNewCrew(this.crew);
    this.router.navigate(['/crew', this.crew.id]);
  }
} // end class
