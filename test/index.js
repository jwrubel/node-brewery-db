'use strict';

var test      = require('tape');
var BreweryDb = require('../index');

var key = {apiKey: 'someApiKey'};

test('BreweryDb', function(t) {
  t.plan(3);

  t.throws(function() {
    new BreweryDb();
  },
  /apiKey property needs to be set/,
  'apiKey key/value in parameter object');

  t.ok(new BreweryDb(key), 'can be instantiated.');

  t.test('beer', function(t) {
    t.plan(1);

    var client = new BreweryDb(key);

    return client.beers({name: 'Corona'}).then(function(res) {
      t.ok(res);
    }).catch(function(err) {
      t.fail('Should not catch');
    });
  });

});
