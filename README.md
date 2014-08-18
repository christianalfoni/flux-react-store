[![Build Status](https://travis-ci.org/christianalfoni/react-flux-store.svg?branch=master)](https://travis-ci.org/christianalfoni/react-flux-store)

## React Store

Part of the FLUX architecture, the store will register a callback on the dispatcher
and emit events on changes to the store. Read more about FLUX and the stores over at [Facebook Flux](http://facebook.github.io/flux/).

Download from **dist**: [ReactStore.min.js](https://rawgithub.com/christianalfoni/react-flux-store/master/dist/ReactStore.min.js) or install from npm with `npm install react-flux-store`.

### Scope
- Has a **create** method to merge an object of properties and methods to the instance
- Inherits from **EventEmitter** so that React JS views can listen to events

### Example
*StoreA.js*
```javascript
var Dispatcher = require('./Dispatcher.js');
var Store = require('react-flux-store');

var StoreA = Store.create({
	data: []
});

Dispatcher.register(StoreA, function (payload) {
	switch (payload.type) {
		case 'updateData':
			StoreA.data = payload.data;
			StoreA.emit('change');
			break;
	}
});

module.exports = StoreA;
```

## Contribute

### Develop
* Run `npm install`
* Run `gulp`
* Any changes to files in `app/` will be compiled to `dev/`

### Test
* Run `gulp test -'./tests/ReactStore-test.js'
* Open the `test.html` file in your browser
* Any changes to files in `app/` and the test file will autoreload the browser

### Run test in terminal
* Run `npm test`
* Currently uses phantomJS, though you can use chrome
