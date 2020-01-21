import { gr_tense, gr_person, gr_number } from "./grammatical-features";
import { bezan } from "./bezan";

test("should return present tense of bezañ", () => {
  expect(
    bezan({
      tense: gr_tense.present,
      person: gr_person.first,
      number: gr_number.singular
    })
  ).toBe("on");

  expect(
    bezan({
      tense: gr_tense.present,
      person: gr_person.second,
      number: gr_number.singular
    })
  ).toBe("out");

  expect(
    bezan({
      tense: gr_tense.present,
      person: gr_person.third,
      number: gr_number.singular
    })
  ).toBe("eo");

  expect(
    bezan({
      tense: gr_tense.present,
      person: gr_person.first,
      number: gr_number.plural
    })
  ).toBe("omp");

  expect(
    bezan({
      tense: gr_tense.present,
      person: gr_person.first,
      number: gr_number.plural
    })
  ).toBe("oc'h");

  expect(
    bezan({
      tense: gr_tense.present,
      person: gr_person.first,
      number: gr_number.plural
    })
  ).toBe("int");
});
