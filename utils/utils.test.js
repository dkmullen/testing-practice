/*jshint esversion: 6 */

const expect = require('expect'); // npm package empowering better assertions
const utils = require('./utils');

it('should add two numbers', () => {
  let res = utils.add(33, 11);
  expect(res).toBe(44).toBeA('number'); // replaces the stuff below
  // if(res !== 44) {
  //  throw new Error(`Expected 44, but got ${res}`);
  // }

});

it('should square a number', () => {
  let res = utils.square(4);
  expect(res).toBe(16).toBeA('number');
  // if(res !== 16) {
  //   throw new Error(`Expected 16 but got ${res}`);
  // }
});

it('should verify that first and last names are set', () => {
  let user = { age: '53', location: 'Kingston' };
  let res = utils.setName(user, 'Dennis Mullen');
  expect(res)
    .toEqual({
      firstName: 'Dennis',
      lastName: 'Mullen',
      age: '53',
      location: 'Kingston'
    })
    .toBeA('object');
});

it('should expect some values', () => {
  // toBe uses the ===
  expect(12).toNotBe(11);
  // toEqual means seperate object, same value
  expect({name: 'Dennis'}).toEqual({name: 'Dennis'}); // see also toNotEqual

  expect([2,3,4]).toInclude(4); // see also toExclude

  expect({
    name: 'Dennis',
    age: '53',
    hometown: 'Kingston'
  }).toInclude({
    name: 'Dennis'
  }).toNotInclude({
    age: '34'
  });
});
