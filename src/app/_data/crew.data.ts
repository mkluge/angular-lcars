import { Crew } from './../_models/crew';

function getBajoranName() {
  return this.surname + ' ' + this.givenName;
}
function getHumanName() {
  return this.givenName + ' ' + this.surname;
}


export const CREW: Crew[] = [
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
    bio: 'Commander Katherine Pulaski, MD, was chief medical officer aboard the USS Enterprise-D in 2365 while Dr. Beverly Crusher was serving as head of Starfleet Medical.',
    getFullName: getHumanName,
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
    bio: `Miles Edward O'Brien was a 24th century Human Starfleet noncommissioned officer who, following his service during the Federation-Cardassian War, served as transporter chief on board the USS Enterprise-D for several years before being promoted to Chief of Operations aboard starbase Deep Space 9. After the Dominion War he accepted a teaching position at Starfleet Academy on Earth.`,
    getFullName: getHumanName,
  },
  {
    id: 3,
    surname: 'Ro',
    givenName: 'Laren',
    birthYear:2340,
    birthPlace: 'Bajor',
    rank: 'Ensign',
    position: 'Conn Officer',
    actor: 'Michelle Forbes',
    imageUrl: 'https://vignette3.wikia.nocookie.net/memoryalpha/images/a/af/Ro_firing_phaser.jpg/revision/latest?cb=20150228075240&path-prefix=en',
    bio: `Ro Laren was a Bajoran national who formerly served in Starfleet aboard the Federation starship USS Enterprise-D before finally sympathizing with, and later defecting to, the Maquis.`,
    getFullName: getBajoranName,

  }
];
