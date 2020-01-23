import {
  gr_tense,
  gr_person,
  gr_number,
  gr_entity,
  gr_semantic,
  gr_form,
  gr_subject_type,
  gr_mode,
} from './grammatical-features';
import { bezan } from './bezan';

/**
 * Present
 * Attribute | verb | subject
 */
test('should return present tense of bezañ when an attribute is placed before', () => {
  expect(
    bezan({
      before: gr_entity.attribute,
      tense: gr_tense.present,
      person: gr_person.first,
      number: gr_number.singular,
    })
  ).toBe('on');

  expect(
    bezan({
      before: gr_entity.attribute,
      tense: gr_tense.present,
      person: gr_person.second,
      number: gr_number.singular,
    })
  ).toBe('out');

  expect(
    bezan({
      before: gr_entity.attribute,
      tense: gr_tense.present,
      person: gr_person.third,
      number: gr_number.singular,
    })
  ).toBe('eo');

  expect(
    bezan({
      before: gr_entity.attribute,
      tense: gr_tense.present,
      person: gr_person.first,
      number: gr_number.plural,
    })
  ).toBe('omp');

  expect(
    bezan({
      before: gr_entity.attribute,
      tense: gr_tense.present,
      person: gr_person.second,
      number: gr_number.plural,
    })
  ).toBe("oc'h");

  expect(
    bezan({
      before: gr_entity.attribute,
      tense: gr_tense.present,
      person: gr_person.third,
      number: gr_number.plural,
    })
  ).toBe('int');
});

/**
 * Present
 * Subject | verb (affirmative) | attribute
 */
test('should return present tense of bezañ when a subject is before bezañ', () => {
  expect(
    bezan({
      before: gr_entity.subject,
      tense: gr_tense.present,
      person: gr_person.first,
      number: gr_number.singular,
    })
  ).toBe('zo');

  expect(
    bezan({
      before: gr_entity.subject,
      tense: gr_tense.present,
      person: gr_person.second,
      number: gr_number.singular,
    })
  ).toBe('zo');

  expect(
    bezan({
      before: gr_entity.subject,
      tense: gr_tense.present,
      person: gr_person.third,
      number: gr_number.singular,
    })
  ).toBe('zo');

  expect(
    bezan({
      before: gr_entity.subject,
      tense: gr_tense.present,
      person: gr_person.first,
      number: gr_number.plural,
    })
  ).toBe('zo');

  expect(
    bezan({
      before: gr_entity.subject,
      tense: gr_tense.present,
      person: gr_person.second,
      number: gr_number.plural,
    })
  ).toBe('zo');

  expect(
    bezan({
      before: gr_entity.subject,
      tense: gr_tense.present,
      person: gr_person.third,
      number: gr_number.plural,
    })
  ).toBe('zo');
});

/**
 * Present
 * Subject | verb (negative) | attribute
 */
test('should return present tense of bezañ when a subject is before bezañ and negative', () => {
  expect(
    bezan({
      before: gr_entity.subject,
      form: gr_form.negative,
      tense: gr_tense.present,
      person: gr_person.first,
      number: gr_number.singular,
    })
  ).toBe("n'on ket");

  expect(
    bezan({
      before: gr_entity.subject,
      form: gr_form.negative,
      tense: gr_tense.present,
      person: gr_person.second,
      number: gr_number.singular,
    })
  ).toBe("n'out ket");

  expect(
    bezan({
      before: gr_entity.subject,
      form: gr_form.negative,
      tense: gr_tense.present,
      person: gr_person.third,
      number: gr_number.singular,
    })
  ).toBe("n'eo ket");

  expect(
    bezan({
      before: gr_entity.subject,
      form: gr_form.negative,
      tense: gr_tense.present,
      person: gr_person.first,
      number: gr_number.plural,
    })
  ).toBe("n'omp ket");

  expect(
    bezan({
      before: gr_entity.subject,
      form: gr_form.negative,
      tense: gr_tense.present,
      person: gr_person.second,
      number: gr_number.plural,
    })
  ).toBe("n'oc'h ket");

  expect(
    bezan({
      before: gr_entity.subject,
      form: gr_form.negative,
      tense: gr_tense.present,
      person: gr_person.third,
      number: gr_number.plural,
    })
  ).toBe("n'int ket");
});

/**
 * Present
 * CCL or Present participle | verb | subject
 * CCL: complément circonstanciel de lieu <=> adverbial phrase of place
 */
test('should return present tense of bezañ in location semantic or with present participle', () => {
  expect(
    bezan({
      before: gr_entity.ccl,
      tense: gr_tense.present,
      person: gr_person.first,
      number: gr_number.singular,
    })
  ).toBe('emaon');

  expect(
    bezan({
      before: gr_entity.present_participle,
      tense: gr_tense.present,
      person: gr_person.second,
      number: gr_number.singular,
    })
  ).toBe('emaout');

  expect(
    bezan({
      before: gr_entity.ccl,
      tense: gr_tense.present,
      person: gr_person.third,
      number: gr_number.singular,
    })
  ).toBe('emañ');

  expect(
    bezan({
      before: gr_entity.present_participle,
      tense: gr_tense.present,
      person: gr_person.first,
      number: gr_number.plural,
    })
  ).toBe('emaomp');

  expect(
    bezan({
      before: gr_entity.ccl,
      tense: gr_tense.present,
      person: gr_person.second,
      number: gr_number.plural,
    })
  ).toBe("emaoc'h");

  expect(
    bezan({
      before: gr_entity.present_participle,
      tense: gr_tense.present,
      person: gr_person.third,
      number: gr_number.plural,
    })
  ).toBe('emaint');
});

/**
 * Present
 * Subject | verb (affirmative) | CCL or present participle
 */
test('should return present tense of bezañ when a subject is before bezañ', () => {
  expect(
    bezan({
      before: gr_entity.subject,
      after: gr_entity.ccl,
      tense: gr_tense.present,
      person: gr_person.first,
      number: gr_number.singular,
    })
  ).toBe('zo');

  expect(
    bezan({
      before: gr_entity.subject,
      after: gr_entity.present_participle,
      tense: gr_tense.present,
      person: gr_person.second,
      number: gr_number.singular,
    })
  ).toBe('zo');

  expect(
    bezan({
      before: gr_entity.subject,
      after: gr_entity.ccl,
      tense: gr_tense.present,
      person: gr_person.third,
      number: gr_number.singular,
    })
  ).toBe('zo');

  expect(
    bezan({
      before: gr_entity.subject,
      after: gr_entity.present_participle,
      tense: gr_tense.present,
      person: gr_person.first,
      number: gr_number.plural,
    })
  ).toBe('zo');

  expect(
    bezan({
      before: gr_entity.subject,
      after: gr_entity.ccl,
      tense: gr_tense.present,
      person: gr_person.second,
      number: gr_number.plural,
    })
  ).toBe('zo');

  expect(
    bezan({
      before: gr_entity.subject,
      after: gr_entity.present_participle,
      tense: gr_tense.present,
      person: gr_person.third,
      number: gr_number.plural,
    })
  ).toBe('zo');
});

/**
 * Present
 * Subject | verb (negative) | CCL or present participle
 */
test('should return present tense of bezañ when a subject is before bezañ and negative and followed by CCL or present participle', () => {
  expect(
    bezan({
      before: gr_entity.subject,
      after: gr_entity.ccl,
      form: gr_form.negative,
      tense: gr_tense.present,
      person: gr_person.first,
      number: gr_number.singular,
    })
  ).toBe("n'emaon ket");

  expect(
    bezan({
      before: gr_entity.subject,
      after: gr_entity.present_participle,
      form: gr_form.negative,
      tense: gr_tense.present,
      person: gr_person.second,
      number: gr_number.singular,
    })
  ).toBe("n'emaout ket");

  expect(
    bezan({
      before: gr_entity.subject,
      after: gr_entity.ccl,
      form: gr_form.negative,
      tense: gr_tense.present,
      person: gr_person.third,
      number: gr_number.singular,
    })
  ).toBe("n'emañ ket");

  expect(
    bezan({
      before: gr_entity.subject,
      after: gr_entity.present_participle,
      form: gr_form.negative,
      tense: gr_tense.present,
      person: gr_person.first,
      number: gr_number.plural,
    })
  ).toBe("n'emaomp ket");

  expect(
    bezan({
      before: gr_entity.subject,
      after: gr_entity.ccl,
      form: gr_form.negative,
      tense: gr_tense.present,
      person: gr_person.second,
      number: gr_number.plural,
    })
  ).toBe("n'emaoc'h ket");

  expect(
    bezan({
      before: gr_entity.subject,
      after: gr_entity.present_participle,
      form: gr_form.negative,
      tense: gr_tense.present,
      person: gr_person.third,
      number: gr_number.plural,
    })
  ).toBe("n'emaint ket");
});

/**
 * Present
 * CCL | verb | subject (presence)
 */
test('should return present tense of bezañ when asking for the presence of the subject, placed after', () => {
  expect(
    bezan({
      subjectType: gr_subject_type.undefinedSubject,
      before: gr_entity.ccl,
      after: gr_entity.subject,
      tense: gr_tense.present,
      person: gr_person.third,
      number: gr_number.singular,
    })
  ).toBe('ez eus');
});

/**
 * Present
 * subject (presence) | verb | CCL
 */
test('should return present tense of bezañ when asking for the presence of the subject, placed before', () => {
  expect(
    bezan({
      subjectType: gr_subject_type.undefinedSubject,
      before: gr_entity.subject,
      after: gr_entity.ccl,
      tense: gr_tense.present,
      person: gr_person.third,
      number: gr_number.singular,
    })
  ).toBe('zo');
});

/**
 * Present
 * verb (negative) | subject (non-countable or plural)
 * N'eus ket chistr
 */
test('should return present tense of bezañ when stating the non-presence of something', () => {
  expect(
    bezan({
      subjectType: gr_subject_type.undefinedSubject,
      form: gr_form.negative,
      number: gr_number.plural,
      after: gr_entity.subject,
      tense: gr_tense.present,
      person: gr_person.third,
    })
  ).toBe("n'eus ket");
});

/**
 * Present
 * verb (negative) | subject (singular)
 * N'eus banne chistr ebet
 */
test('should return present tense of bezañ when stating the non-presence of something', () => {
  expect(
    bezan({
      subjectType: gr_subject_type.undefinedSubject,
      form: gr_form.negative,
      number: gr_number.singular,
      after: gr_entity.subject,
      tense: gr_tense.present,
      person: gr_person.third,
    })
  ).toBe("n'eus %s ebet");
});
