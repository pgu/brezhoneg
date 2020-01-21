import {
  gr_person,
  gr_tense,
  gr_number,
  gr_subject,
  gr_mode,
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

const conjugationForLocation = {
  [gr_number.singular]: {
    [gr_person.first]: 'emaon',
    [gr_person.second]: 'emaout',
    [gr_person.third]: 'emañ',
  },
  [gr_number.plural]: {
    [gr_person.first]: 'emaomp',
    [gr_person.second]: "emaoc'h",
    [gr_person.third]: 'emaint',
  },
};

export function bezan({
  subject = gr_subject.isNotPresent,
  mode,
  tense,
  number,
  person,
}) {
  if (mode === gr_mode.isLocation) {
    return conjugationForLocation[number][person];
  }

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
