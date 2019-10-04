"use strict";
const path = require("path");
const assert = require("yeoman-assert");
const helpers = require("yeoman-test");

describe("generator-dailyprogrammer:app", () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, "../generators/app")).withPrompts({
      task: "123.4",
      inputVarName: "inputVar",
      bonuses: 0,
      unitTestsNumber: 1,
      exampleInput1: "testInput",
      exampleOutput1: "testOutput"
    });
  });

  it("creates files", () => {
    assert.file(["123/123.4.js", "123/123.4.test.js"]);
  });
});
