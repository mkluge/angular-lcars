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
    imageUrl: 'http://tng.trekcore.com/hd/albums/season-5/5x03/ensign-ro-hd-144.jpg',
    bio: `Ro Laren was a Bajoran national who formerly served in Starfleet aboard the Federation starship USS Enterprise-D before finally sympathizing with, and later defecting to, the Maquis.`,
    getFullName: getBajoranName,
  },
  {
    id: 4,
    surname: `Barclay`,
    givenName: 'Reginald',
    birthYear: 2340,
    birthPlace: 'Cleveland, Ohio, USA, Earth',
    rank: 'Lieutenant',
    position: 'Systems Diagnostic Engineer',
    actor: 'Dwight Schultz',
    imageUrl: 'https://78.media.tumblr.com/cbe61ee05e5823d6f647515904336e87/tumblr_o0rgq3ZV6M1uz53k3o1_500.jpg',
    bio: `Lieutenant Reginald Endicott Barclay III (often referred to as "Reg") was a highly talented Human Starfleet systems diagnostic engineer who lived in the 24th century. In his early days aboard the Enterprise-D, he frequently displayed nervous behavior, demonstrated a noticeable lack of confidence, stammered frequently, was extremely introverted, and occasionally bumbled. These traits aroused the derision of some of his shipmates on the USS Enterprise-D – with some even going as far as calling him "Lieutenant Broccoli" behind his back or, on unfortunate occasions, to his face.`,
    getFullName: getHumanName,
  },
  {
    id: 5,
    surname: `Gomez`,
    givenName: `Sonya`,
    birthYear: 2343,
    birthPlace: `Puerto Rico, Earth`,
    rank: `Ensign`,
    position: `Engineer`,
    actor: `Lycia Naff`,
    imageUrl: `http://powet.tv/powetblog/wp-content/uploads/2012/06/lycia_naff_as_ensign_sonya_gomez_in_star_trek_the_next_generation.jpg`,
    bio: `Ensign Sonya Gomez was a female Human Starfleet engineering officer serving in the late-24th century. Her specialty was in antimatter. Opinionated and vocal, she also had a tendency to speak quickly when excited.`,
    getFullName: getHumanName,
  }

];
