var React = require('react');
var NoteList = require('./NoteList');
var AddNote = require('./AddNote');

var Notes = React.createClass({
    propTypes: {
        username: React.PropTypes.string.isRequired,
        notes: React.PropTypes.array.isRequired,
        addNote: React.PropTypes.func.isRequired
    },
    render: function () {
        var items = this.props.notes.map(function(item) {
            return (<li>{item}</li>);
        });
        return (
            <section className="well well-lg">
                <h1>Notes</h1>
                <AddNote username={this.props.username} addNote={this.props.addNote} />
                <NoteList notes={this.props.notes} />
            </section>
        );
    }
});


module.exports = Notes;