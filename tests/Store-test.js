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
    var eventTriggered = false;
    store.on('test', function () {
      eventTriggered = true;
    });
    store.emit('test');
    expect(eventTriggered).to.equal(true);
  });
  it('should trigger update event on running flush method', function () {
    var Store = require('../app/main.js');
    var FakeDispatcher = {register: function () {}, dispatch: function () {}};
    var store = Store.create(FakeDispatcher);
    var eventTriggered = false;
    store.on('update', function () {
      eventTriggered = true;
    });
    store.flush();
    expect(eventTriggered).to.equal(true);
  });
});
