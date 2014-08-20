var EventEmitter = require('events').EventEmitter;
var merge = require('react/lib/merge');
var mergeInto = require('react/lib/mergeInto');

var Store = function () {}
Store.prototype = merge(EventEmitter.prototype, {
	dispatch: function () {},
	flush: function () {
		this.emit('update');
	}
});
Store.create = function (name, Dispatcher, props) {
	if (arguments.length < 2 || typeof name !== 'string' || !Dispatcher.register || !Dispatcher.dispatch) {
		throw new Error('You have to pass a name, a Dispatcher and optionally an object to merge ');
	}
	props = props || {};
	var store = new Store();
	mergeInto(store, props);
	Dispatcher.register(name, store, store.dispatch.bind(store));
	return store;
};
module.exports = Store;