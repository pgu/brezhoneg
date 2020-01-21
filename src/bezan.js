import {
  gr_person,
  gr_tense,
  gr_number,
  gr_subject,
} from './grammatical-features';

const conjugation = {
  [gr_tense.present]: {
    [gr_number.singular]: {
      [gr_person.first]: 'on',
      [gr_person.second]: 'out',
      [gr_person.third]: 'eo',
    },
    [gr_number.plural]: {
      [gr_person.first]: 'omp',
      [gr_person.second]: "oc'h",
      [gr_person.third]: 'int',
    },
  },
};

export function bezan({
  subject = gr_subject.isNotPresent,
  tense,
  number,
  person,
}) {
  if (subject === gr_subject.isNotPresent) {
    return conjugation[tense][number][person];
  } else if (subject === gr_subject.isBefore) {
    if (tense === gr_tense.present) {
      return 'zo';
    } else {
      throw Error(`Unsupported tense: ${tense}`);
    }
  } else if (subject === gr_subject.isAfter) {
    throw Error(`Unsupported subject: ${subject}`);
  } else {
    throw Error(`Undefined 'subject': ${subject}`);
  }
}
