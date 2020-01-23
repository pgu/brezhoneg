import {
  gr_tense,
  gr_person,
  gr_number,
  gr_entity,
  gr_semantic,
  gr_form,
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
 * CCL | verb | subject
 * CCL: complément circonstanciel de lieu <=> adverbial phrase of place
 */
test('should return present tense of bezañ in location semantic', () => {
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
      before: gr_entity.ccl,
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
      before: gr_entity.ccl,
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
      before: gr_entity.ccl,
      tense: gr_tense.present,
      person: gr_person.third,
      number: gr_number.plural,
    })
  ).toBe('emaint');
});

/**
 * Present
 * Present participle | verb | subject
 */
test('should return present tense of bezañ when used with present participle', () => {
  expect(
    bezan({
      before: gr_entity.present_participle,
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
      before: gr_entity.present_participle,
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
      before: gr_entity.present_participle,
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
