import { isMatchFound } from "./Card.js";

describe("testing card matching logic", () => {
  // has matching html elements
  let arr = [];

  let element1 = document.createElement("IMG");
  element1.setAttribute("data-id", "boom");
  let element2 = document.createElement("IMG");
  element2.setAttribute("data-id", "boom");
  let element3 = document.createElement("IMG");
  element3.setAttribute("data-id", "boom2");

  arr.push(element1);
  arr.push(element2);

  // has non-matching html elements
  let arr2 = [];
  arr2.push(element1);
  arr2.push(element3);
  // act

  it("returns true if ids match", () => {
    // arrange
    // create an array of 2 html img elements with data-id attributes

    // assert
    expect(isMatchFound(arr)).toBeTruthy();
  });
  it("returns false if ids do not match", () => {
    // expect(isMatchFound(arr2)).toBe(false);
    expect(isMatchFound(arr2)).toBeFalsy();
  });
});