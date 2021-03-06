﻿var React = require('react');
var RouteHandler = require('react-router').RouteHandler;
var SearchGitHub = require('./SearchGitHub');
var Drawer = require('./Drawer');

var Main = React.createClass({
    render: function () {
        return (
            <div className="main-container">
                <Drawer />
                <nav className="navbar navbar-default" role="navigation">
                    <div className="col-sm-7 col-sm-offset-2" style={{marginTop:15}}>
                        <SearchGitHub />
                    </div>
                </nav>
                <div className="container">
                    <RouteHandler />
                </div>
            </div>
        )
    }
});

module.exports = Main;