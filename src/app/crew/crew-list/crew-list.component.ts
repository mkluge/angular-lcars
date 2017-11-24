import { ActivatedRoute } from '@angular/router';
import { Crew } from './../../_models/crew';
import { CrewService } from './../../_services/crew.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-crew-list',
  templateUrl: './crew-list.component.html',
  styleUrls: ['./crew-list.component.css']
})
export class CrewListComponent implements OnInit {
  crewList: Crew[];
  @Output() selectedCrew: EventEmitter<Crew> = new EventEmitter();

  constructor(
    private crewService: CrewService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // crewService.getAllCrew returns a Promise
    this.crewService.getAllCrew().then(cList => (this.crewList = cList));

    // create a subscription to watch for change in route params
    this.route.params.subscribe(event => {
      this.crewService
        .getOneCrew(this.route.snapshot.params['id'])
        .then(crew => this.selectedCrew.emit(crew));
    });
  }

} // end class
