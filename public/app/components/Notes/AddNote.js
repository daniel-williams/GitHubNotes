﻿var React = require('react');

var AddNote = React.createClass({
    PropTypes: {
        username: React.PropTypes.string.isRequired,
        addNote: React.PropTypes.func.isRequired
    },
    handleSubmit: function(e) {
        var newNote = this.refs.note.getDOMNode().value;
        this.refs.note.getDOMNode().value = '';
        this.props.addNote(newNote); // callback 
    },
    render: function () {
        return (
            <div className="input-group">
                <input type="text" className="form-control" ref="note" placeholder="Add New Note" />
                <span className="input-group-btn">
                    <button className="btn btn-default" type="button" onClick={this.handleSubmit}>Submit</button>
                </span>
            </div>
        );
    }
});


module.exports = AddNote;