var React = require('react');

var Repos = React.createClass({
    propTypes: {
        username: React.PropTypes.string.isRequired,
        repos: React.PropTypes.array.isRequired
    },
    render: function () {
        var repos = this.props.repos.map(function(repo, index) {
            return (
                <li className="list-group-item" key={index}>
                    {repo.html_url && <h4><a href={repo.html_url}>{repo.name}</a></h4>}
                    {repo.description && <p>{repo.description}</p>}
                </li>
            )
        })
        return (
            <section className="well well-lg">
                <h1>User Repos</h1>
                <ul className="list-group">
                    {repos}
                </ul>
            </section>
        )
    }
});

module.exports = Repos;