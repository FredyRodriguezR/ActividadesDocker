var app = require('./app');
var chai = require('chai');
var request = require('supertest');

var expect = chai.expect;
describe('API Tests', function() {
  it('should return OK', function(done) {
    request(app)
      .get('/api/test')
        .end(function(err, res) {
        expect(res.body.status).to.be.ok;
        expect(res.statusCode).to.equal(200);
        done();
      });
  });
});

