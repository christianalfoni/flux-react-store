/** @jsx React.DOM */
var expect = require('chai').expect;

describe('Store', function() {
  it('should add properties to the store object when created and have a default dispatch method', function() {
    var Store = require('../app/main.js');
    var FakeDispatcher = {register: function () {}, dispatch: function () {}};
    var store = Store.create(FakeDispatcher, {foo: 'bar'});
    expect(store.foo).to.equal('bar');
    expect(store.dispatch).to.be.instanceof(Function);
  });
  it('should have event handling', function () {
    var Store = require('../app/main.js');
    var FakeDispatcher = {register: function () {}, dispatch: function () {}};
    var store = Store.create(FakeDispatcher);
    store.on('test', function () {
      expect(true).to.equal(true); // Just verify that it has been called
    });
    store.emit('test');
  });
});
