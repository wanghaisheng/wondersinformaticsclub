var app = require('../../app');
var request = require('supertest')(app);

describe('test/controllers/static.test.js', function () {
  it('should get /about', function (done) {
    request.get('/about').expect(200)
      .end(function (err, res) {
        res.text.should.containEql('万达人社区');
        done(err);
      });
  });

  it('should get /faq', function (done) {
    request.get('/faq').expect(200)
      .end(function (err, res) {
        res.text.should.containEql('万达人 社区和 万达智通 是什么关系？');
        done(err);
      });
  });



  it('should get /robots.txt', function (done) {
    request.get('/robots.txt').expect(200)
      .end(function (err, res) {
        res.text.should.containEql('User-Agent');
        done(err);
      });
  });
});
