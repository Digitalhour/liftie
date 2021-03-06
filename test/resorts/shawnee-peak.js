var should = require('should');
var fs = require('fs');
var parser = require('../../lib/lifts/parser');
var parse = require('../../lib/lifts/parse')('shawnee-peak');

/*global describe, it */
describe('parse shawnee-peak', function() {

  it('should return lift status', function(done) {
    var stream = fs.createReadStream(__dirname + '/example/shawnee-peak.html');
    stream.on('error', done);
    stream.pipe(parser(parse, function(err, status) {
      var expected = {
        'Li\'l Pine Beginner Surface Carpet': 'closed',
        'Pine Quad': 'closed',
        'Rabbit Run Double': 'closed',
        'Summit Triple': 'closed',
        'Sunnyside Triple': 'closed'
      };
      should.exist(status);
      status.should.eql(expected);
      done(err);
    }));
  });
});