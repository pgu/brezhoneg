import { gr_person, gr_tense, gr_number } from './grammatical-features';

const conjugation = {
  [gr_tense.present]: {
    [gr_number.singular]: {
      [gr_person.first]: 'on',
      [gr_person.second]: 'out',
    }
  }
};


export function bezan({tense, number, person}) {
  return conjugation[tense][number][person];
}

