/*jshint esversion: 6 */

// Supertest is a package that makes it easy to run tests on API calls
const request = require('supertest'),
  expect = require('expect');

let app = require('./server').app;


// Use describe to group test output. You can create tests without them
describe('Server', () => {
  describe('GET /', () => {
    it('should return page not found response', (done) => {
      request(app)
        .get('/')
        .expect(404)
        .expect((res) => {
          expect(res.body).toInclude({ // here we add the expect package to supertest
            error: 'Page not found.'
          });
        })
        .end(done);
    });
  });

  describe('GET /users', () => {
    it('should confirm that a given user exists', (done) => {
      request(app)
        .get('/users')
        .expect(200)
        .expect((res) => {
          expect(res.body).toInclude({
            name: 'Kiri',
            age: 13
          });
        })
        .end(done);
    });
  });
});
