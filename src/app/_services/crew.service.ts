import { Crew } from './../_models/crew';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

const crewDB = [
  {
    id: 1,
    surname: 'Pulaski',
    givenName: 'Katherine',
    birthYear: 2318,
    birthPlace: 'Poland, Earth',
    rank: 'Commander',
    position: 'Chief Medical Officer',
    actor: 'Diana Muldaur',
    imageUrl: 'http://www.startrek.com/uploads/assets/db_articles/c764f83d6c735af5a7cf363bcad44e310a5f4458.jpg',
    bio: 'Commander Katherine Pulaski, MD, was chief medical officer aboard the USS Enterprise-D in 2365 while Dr. Beverly Crusher was serving as head of Starfleet Medical.'
  },
  {
    id: 2,
    surname: `O'Brien`,
    givenName: 'Miles',
    birthYear: 2328,
    birthPlace: 'Ireland, Earth',
    rank: 'Chief Petty Officer',
    position: 'Transporter Chief',
    actor: 'Colm Meaney',
    imageUrl: 'https://thenerdsofcolor.files.wordpress.com/2013/09/amatterofhonor016.jpg',
    bio: `Miles Edward O'Brien was a 24th century Human Starfleet noncommissioned officer who, following his service during the Federation-Cardassian War, served as transporter chief on board the USS Enterprise-D for several years before being promoted to Chief of Operations aboard starbase Deep Space 9. After the Dominion War he accepted a teaching position at Starfleet Academy on Earth.`
  }
];

@Injectable()
export class CrewService {
  crewList: Crew[];

  constructor() {
    this.crewList = crewDB;
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
