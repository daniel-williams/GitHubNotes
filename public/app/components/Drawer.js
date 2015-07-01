var React = require('react');
var tweenState = require('react-tween-state');

var Drawer = React.createClass({
    mixins: [tweenState.Mixin],
    getInitialState: function () {
        return {
            left: 0
        }
    },
    handleClick: function(e) {
        this.tweenState('left', {
            easing: tweenState.easingTypes.easeInOutQuad,
            duration: 500,
            endValue: this.state.left === 0 ? -500 : 0
        });
    },
    render: function () {
        var style = {
            position: 'fixed',
            width: 500,
            top: 0,
            bottom: 0,
            right: 0,
            left: this.getTweeningValue('left'),
            backgroundColor: '#3b3b3b',
            boxShadow: '1px 1px 3px rgba(0,0,0,.25)',
            zIndex: 999
        }
        return (
            <div>
            <div className='sidebar' style={style}>
                <h1 className='menu-title'>Awesome Menu</h1>
            </div>
            <div style={{textAlign:'right'}}>
            <button type="button" onClick={this.handleClick}>Toggle</button>
            </div>
            </div>
        )
    }
});

module.exports = Drawer;