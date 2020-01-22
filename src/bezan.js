import {
  gr_person,
  gr_tense,
  gr_number,
  gr_entity,
  gr_semantic,
  gr_subject_type,
  gr_mode,
  gr_form,
} from './grammatical-features';

const conjugation = {
  [gr_mode.indicative]: {
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
  before,
  form = gr_form.affirmative,
  mode = gr_mode.indicative,
  tense,
  number,
  person,
  subjectType = gr_subject_type.definedSubject,
}) {
  if (subjectType === gr_subject_type.definedSubject) {
    if (before === gr_entity.attribute) {
      return conjugation[mode][tense][number][person];
    } else if (before === gr_entity.subject) {
      if (form === gr_form.negative) {
        return "n'" + conjugation[mode][tense][number][person] + ' ket';
      } else if (form === gr_form.affirmative) {
        if (mode === gr_mode.indicative && tense === gr_tense.present) {
          return 'zo';
        } else {
          throw Error(`Unsupported tense ${tense} and mode ${mode}`);
        }
      } else {
        throw Error(`Unsupported form ${form}`);
      }
    } else if (
      before === gr_entity.ccl ||
      before === gr_entity.present_participle
    ) {
      if (tense === gr_tense.present && mode === gr_mode.indicative) {
        return conjugationForLocation[number][person];
      } else {
        throw Error(`Unsupported tense ${tense} or mode ${mode} for location.`);
      }
    } else {
      throw Error(`Undefined 'before': ${before}`);
    }
  } else if (subjectType === gr_subject_type.undefinedSubject) {
  } else {
    throw Error(`Undefined subject type: ${subjectType}`);
  }
}
