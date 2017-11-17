/*jshint esversion: 6 */

// Spies replace an actual function with a simulation or spy

const expect = require('expect'), // spies is part of expect
  rewire = require('rewire');

let app = rewire('./app'); // rewire used in place of require

describe('App', () => {
  let db = {
    saveUser: expect.createSpy()
  };
  app.__set__('db', db);

  it('should call the spy correctly', () => {
    let spy = expect.createSpy();
    spy('Andrew', 25);
    expect(spy).toHaveBeenCalledWith('Andrew', 25);
  });

  it('should call saveUser with user object', () => {
    let email = 'dennis@dennis.com',
      password = '123';

    app.handleSignup(email, password);
    expect(db.saveUser).toHaveBeenCalledWith({email, password});
  });

});

// see also toHaveBeenCalled, toNotHaveBeenCalled, and many more
// google mjackson expect
