var React = require('react');

var NoteManager = React.createClass({
    render: function () {
        var items = this.props.notes.map(function(item) {
            return <li>{item}</li>
        });
        return (
            <section className="well well-lg">
                <h1>Notes</h1>    
                <div>
                    <ul>{items}</ul>
                </div>
            </section>
        );
    }
});


module.exports = NoteManager;