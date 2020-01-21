import {
  gr_tense,
  gr_person,
  gr_number,
  gr_subject,
} from './grammatical-features';
import { bezan } from './bezan';

test('should return present tense of bezañ when no subject is specified', () => {
  expect(
    bezan({
      tense: gr_tense.present,
      person: gr_person.first,
      number: gr_number.singular,
    })
  ).toBe('on');

  expect(
    bezan({
      tense: gr_tense.present,
      person: gr_person.second,
      number: gr_number.singular,
    })
  ).toBe('out');

  expect(
    bezan({
      tense: gr_tense.present,
      person: gr_person.third,
      number: gr_number.singular,
    })
  ).toBe('eo');

  expect(
    bezan({
      tense: gr_tense.present,
      person: gr_person.first,
      number: gr_number.plural,
    })
  ).toBe('omp');

  expect(
    bezan({
      tense: gr_tense.present,
      person: gr_person.second,
      number: gr_number.plural,
    })
  ).toBe("oc'h");

  expect(
    bezan({
      tense: gr_tense.present,
      person: gr_person.third,
      number: gr_number.plural,
    })
  ).toBe('int');
});

test('should return present tense of bezañ when a subject is specified and is before bezañ', () => {
  expect(
    bezan({
      subject: gr_subject.isBefore,
      tense: gr_tense.present,
      person: gr_person.first,
      number: gr_number.singular,
    })
  ).toBe('zo');

  expect(
    bezan({
      subject: gr_subject.isBefore,
      tense: gr_tense.present,
      person: gr_person.second,
      number: gr_number.singular,
    })
  ).toBe('zo');

  expect(
    bezan({
      subject: gr_subject.isBefore,
      tense: gr_tense.present,
      person: gr_person.third,
      number: gr_number.singular,
    })
  ).toBe('zo');

  expect(
    bezan({
      subject: gr_subject.isBefore,
      tense: gr_tense.present,
      person: gr_person.first,
      number: gr_number.plural,
    })
  ).toBe('zo');

  expect(
    bezan({
      subject: gr_subject.isBefore,
      tense: gr_tense.present,
      person: gr_person.second,
      number: gr_number.plural,
    })
  ).toBe('zo');

  expect(
    bezan({
      subject: gr_subject.isBefore,
      tense: gr_tense.present,
      person: gr_person.third,
      number: gr_number.plural,
    })
  ).toBe('zo');
});
