import { Crew } from './../../_models/crew';
import { CrewService } from './../../_services/crew.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

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

}
