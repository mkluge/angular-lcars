import { Crew } from './../_models/crew';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { CREW } from '../_data/crew.data';

function getFullNameFunction() {
  return this.givenName + ' ' + this.surname
}

@Injectable()
export class CrewService {
  crewList: Crew[];

  constructor() {
    this.crewList = CREW;
  }

  getAllCrew(): Promise<Crew[]> {
    return Promise.resolve(this.crewList);
  }

  // This will return a promise because data will be returned asynchronously
  getOneCrew(id:number): Promise<Crew> {
    let foundCrew;
    this.crewList.forEach(crew => {
      if (crew.id == id) { foundCrew = crew; }
    });
    return Promise.resolve(foundCrew);
  }

}
