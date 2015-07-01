var React = require('react');
var Router = require('react-router');

var SearchGitHub = React.createClass({
    mixins: [Router.Navigation],
    handleSubmit: function() {
        var username = this.refs.username.getDOMNode().value;
        this.refs.username.getDOMNode().value = '';
        console.log(username);

        this.transitionTo('profile', {username: username});
    },
    render: function () {
        return (
            <div className="col-sm-12" style={{marginBottom:15}}>
                <form onSubmit={this.handleSubmit}>
                    <div className="input-group">
                        <input type="text" className="form-control" ref="username" />
                        <span className="input-group-btn">
                            <button type="submit" className="btn btn-block btn-primary">Search GitHub</button>
                        </span>
                    </div>
                </form>
            </div>
        )
    }
});

module.exports = SearchGitHub;