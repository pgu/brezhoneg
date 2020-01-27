import {
  gr_person,
  gr_tense,
  gr_number,
  gr_entity,
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
    [gr_tense.present_of_habits]: {
      [gr_number.singular]: {
        [gr_person.first]: 'e vezan',
        [gr_person.second]: 'e vezez',
        [gr_person.third]: 'e vez',
        [gr_person.third_neutral]: 'e vezer',
      },
      [gr_number.plural]: {
        [gr_person.first]: 'e vezomp',
        [gr_person.second]: 'e vezit',
        [gr_person.third]: 'e vezont',
      },
    },
    [gr_tense.future]: {
      [gr_number.singular]: {
        [gr_person.first]: 'e vin',
        [gr_person.second]: 'e vi',
        [gr_person.third]: 'e vo',
      },
      [gr_number.plural]: {
        [gr_person.first]: 'e vimp',
        [gr_person.second]: "e voc'h",
        [gr_person.third]: 'e vint',
      },
    },
    [gr_tense.past_of_habits]: {
      [gr_number.singular]: {
        [gr_person.first]: 'e vezen',
        [gr_person.second]: 'e vezes',
        [gr_person.third]: 'e veze',
      },
      [gr_number.plural]: {
        [gr_person.first]: 'e vezemp',
        [gr_person.second]: "e vezec'h",
        [gr_person.third]: 'e vezent',
      },
    },
    [gr_tense.past]: {
      [gr_number.singular]: {
        [gr_person.first]: 'e oan',
        [gr_person.second]: 'e oas',
        [gr_person.third]: 'e oa',
      },
      [gr_number.plural]: {
        [gr_person.first]: 'e oamp',
        [gr_person.second]: "e oac'h",
        [gr_person.third]: 'e oant',
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
  after,
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
    } else if (before === gr_entity.complement) {
      return conjugation[mode][tense][number][person];
    } else if (before === gr_entity.subject) {
      if (form === gr_form.negative) {
        if (after === gr_entity.present_participle || after === gr_entity.ccl) {
          return "n'" + conjugationForLocation[number][person] + ' ket';
        } else {
          return "n'" + conjugation[mode][tense][number][person] + ' ket';
        }
      } else if (form === gr_form.affirmative) {
        if (mode === gr_mode.indicative) {
          if (tense === gr_tense.present) {
            return 'zo';
          } else if (tense === gr_tense.future) {
            return 'a vo';
          } else if (tense === gr_tense.present_of_habits) {
            return 'a vez';
          } else if (tense === gr_tense.past_of_habits) {
            return 'a veze';
          } else {
            throw Error(`Unsupported tense ${tense}`);
          }
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
    //
  } else if (subjectType === gr_subject_type.undefinedSubject) {
    //
    if (form === gr_form.affirmative) {
      if (before === gr_entity.ccl) {
        return 'ez eus';
      } else if (before === gr_entity.subject) {
        return 'zo';
      } else {
        throw Error(`Undefined before ${before}`);
      }
      //
    } else if (form === gr_form.negative) {
      //
      if (number === gr_number.singular) {
        return "n'eus %s ebet";
      } else if (number === gr_number.plural) {
        return "n'eus ket";
      } else {
        throw Error(`Undefined number ${gr_number}`);
      }
    } else {
      throw Error(`Undefined form ${form}`);
    }
    //
  } else {
    throw Error(`Undefined subject type ${subjectType}`);
  }
}
