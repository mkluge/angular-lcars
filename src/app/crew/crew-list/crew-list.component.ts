import { ActivatedRoute } from "@angular/router";
import { Crew } from "./../../_models/crew";
import { CrewService } from "./../../_services/crew.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-crew-list",
  templateUrl: "./crew-list.component.html",
  styleUrls: ["./crew-list.component.css"]
})
export class CrewListComponent implements OnInit {
  crewList: Crew[];
  selectedCrew: Crew;

  constructor(
    private crewService: CrewService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // crewService.getAllCrew returns a Promise
    this.crewService.getAllCrew().then(crewList => (this.crewList = crewList));

    this.route.params.subscribe(event => {
      // crewService.getOneCrew returns a Promise
      this.crewService
        .getOneCrew(this.route.snapshot.params['id'])
        .then(crew => (this.selectedCrew = crew));
    });
  }

  ngOnChange() {

  }
}
