/**
 * https://fr.wikipedia.org/wiki/Conjugaison
 * https://en.wikipedia.org/wiki/Grammatical_category
 */

/**
 * https://en.wikipedia.org/wiki/Grammatical_tense
 * @type {{present: string}}
 */
export const gr_tense = {
  present: 'present',
};

/**
 * https://fr.wikipedia.org/wiki/Personne_(grammaire)
 * @type {{third: string, first: string, second: string}}
 */
export const gr_person = {
  first: 'first',
  second: 'second',
  third: 'third',
};

export const gr_number = {
  singular: 'singular',
  plural: 'plural',
};

export const gr_entity = {
  attribute: 'attribute',
  subject: 'subject',
  ccl: 'ccl',
  present_participle: 'present_participle',
};

export const gr_subject_type = {
  definedSubject: 'definedSubject',
  undefinedSubject: 'undefinedSubject',
};

export const gr_form = {
  affirmative: 'affirmative',
  negative: 'negative',
};

/**
 * https://fr.wikipedia.org/wiki/Mode_(grammaire)
 * @type {{subjonctive: string, conditional: string, participle: string, infinitive: string, gerundive: string, indicative: string, imperative: string}}
 */
export const gr_mode = {
  indicative: 'indicative',
  imperative: 'imperative',
  subjonctive: 'subjonctive',
  conditional: 'conditional',
  infinitive: 'infinitive',
  participle: 'participle',
  gerundive: 'gerundive',
};
