[![Build Status](https://travis-ci.org/christianalfoni/react-flux-store.svg?branch=master)](https://travis-ci.org/christianalfoni/react-flux-store)

## React Store

Part of the FLUX architecture, the store will register a callback on the dispatcher
and emit events on changes to the store. Read more about FLUX and the stores over at [Facebook Flux](http://facebook.github.io/flux/).

Download from **dist**: [ReactStore.min.js](https://rawgithub.com/christianalfoni/react-flux-store/master/dist/ReactStore.min.js) or install from npm with `npm install react-flux-store`.

### Scope
- Has a **create** method that takes a dispatcher. It registers the store to the dispatcher that calls a **dispatch** method on your store, which receives the payload and the **waitFor** function
- The **create** method also takes a second argument. Object passed will be merged with the store allowing you to create your own dispatch and other props and methods
- Inherits from **EventEmitter** so that React JS views can listen to events
- Instance of store has a **flush** method that will emit an 'update' event

### Example
*StoreA.js*
```javascript
var Dispatcher = require('./Dispatcher.js');
var Store = require('react-flux-store');

var StoreA = Store.create(Dispatcher, {
	data: [],
	dispatch: function (payload) {
		switch (payload.type) {
			case 'updateData':
				this.data = payload.data;
				this.flush();
				break;
		}
	}
});

module.exports = StoreA;
```
*Component.js*
```javascript
/** @jsx React.DOM */
var React = require('react');
var StoreA = require('./StoreA.js');

var Component = React.createClass({
 	getInitialState: function () {
 		return { foo: null };
 	},
	didComponentMount: function () {
		StoreA.on('update', this.handleChange);
	},
	willComponentUnmount: function () {
		StoreA.off('update', this.handleChange);
	},
	handleChange: function (bar) {
		this.setState({
			foo: bar
		});
	},
	render: function() {
		return (
			<div />
		);
	}
	
});
	
module.exports = Component;
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
