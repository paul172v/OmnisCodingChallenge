import assert from "assert";
import { test } from "node:test";
import * as nameGenerator from "./generateNames.mjs";

// Check we can generate 10 names:
test("generateTenNames", (t) => {
  const names = nameGenerator.generateNames(10);
  testNameArray(10, names);
});

// Check we can generate 101 names:
test("generate101Names", (t) => {
  const names = nameGenerator.generateNames(101);
  testNameArray(101, names);
});

// Check that by default, passing no parameter, yields 100 names:
test("generateDefaultNames", (t) => {
  const names = nameGenerator.generateNames();
  testNameArray(100, names);
});

// We can query for the max number of names suported, and request that:
test("generateMaxNames", (t) => {
  const maxNames = nameGenerator.getMaxNames();
  const names = nameGenerator.generateNames(maxNames);
  testNameArray(maxNames, names);
});

// We handle the case that more than the max number of names are requested:
test("generateOverMaxNames", (t) => {
  const maxNames = nameGenerator.getMaxNames();
  const names = nameGenerator.generateNames(maxNames + 1);
  // If we ask it to generate more than the max number of names, it should just generate the max number.
  testNameArray(maxNames, names);
});

function testNameArray(expectedLength, nameArray) {
  assert.ok(
    nameArray?.length === expectedLength,
    `There are ${expectedLength} elements`
  );

  // Check for duplicates:
  let usedNames = [];
  for (const name of nameArray) {
    assert.ok(!!name.firstName, `First Name is populated`);
    assert.ok(!!name.lastName, `Last Name is populated`);

    const fullName = `${name.firstName} ${name.lastName}`;
    if (usedNames.includes(fullName))
      throw new Error(`Duplicate name found: "${fullName}"`);

    usedNames.push(fullName);
  }
}
