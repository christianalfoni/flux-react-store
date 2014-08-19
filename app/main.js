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
Store.create = function (Dispatcher, props) {
	if (arguments.length === 0 || !Dispatcher.register || !Dispatcher.dispatch) {
		throw new Error('You have to pass a Dispatcher and optionally an object to merge ');
	}
	props = props || {};
	var store = new Store();
	mergeInto(store, props);
	Dispatcher.register(store, store.dispatch.bind(store));
	return store;
};
module.exports = Store;