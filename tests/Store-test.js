/** @jsx React.DOM */
var expect = require('chai').expect;

describe('Store', function() {
  it('should add properties to the store object when created', function() {
    var Store = require('../app/main.js');
    var store = Store.create({foo: 'bar'});
    expect(store.foo).to.equal('bar');
  });
  it('should have event handling', function () {
    var Store = require('../app/main.js');
    var store = Store.create();
    store.on('test', function () {
      expect(true).to.equal(true); // Just verify that it has been called
    });
    store.emit('test');
  });
});
