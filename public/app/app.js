var React = require('react');
var Router = require('react-router');
var routes = require('./config/routes');

// Router.HistoryLocation
Router.run(routes, Router.HashLocation, function (Root) {
    React.render(<Root />, document.getElementById('app'));
});

console.log('app');