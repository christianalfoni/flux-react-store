var EventEmitter = require('events').EventEmitter;
var merge = require('react/lib/merge');
var mergeInto = require('react/lib/mergeInto');

var Store = function () {}
Store.prototype = merge(EventEmitter.prototype, {});
Store.create = function (options) {
	options = options || {};
	var store = new Store();
	mergeInto(store, options);
	return store;
};
module.exports = Store;