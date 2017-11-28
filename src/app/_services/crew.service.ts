import { Crew } from './../_models/crew';
import { Injectable } from '@angular/core';
import { CREW } from '../_data/crew.data';

@Injectable()
export class CrewService {
  crewList: Crew[];

  constructor() {
    this.crewList = CREW;
  }

  // These GET methods will return a promise because data will be returned asynchronously
  getAllCrew(): Promise<Crew[]> {
    return Promise.resolve(this.crewList);
  }

  getOneCrew(id: number): Promise<Crew> {
    let foundCrew;
    this.crewList.forEach(crew => {
      if (crew.id == id) { foundCrew = crew; }
    });
    return Promise.resolve(foundCrew);
  }

  getCrewListLength() {
    return this.crewList.length;
  }

  saveNewCrew(crew) {
    const newCrew = crew;
    newCrew.id = this.crewList.length + 1;
    console.log('New Crew: ', newCrew);
    this.crewList.push(newCrew);
    console.log(this.crewList);
  }

} // end class
