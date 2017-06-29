import React from 'react';
import { Tooltip } from 'rebass';

var Icon = React.createClass({
    getInitialState: function () {
        return ({ isHighlighted: false });
    },

    onMouseEnter: function () {
        this.setState({ isHighlighted: true });
    },

    onMouseLeave: function () {
        this.setState({ isHighlighted: false });
    },

    render: function () {
        var style = {
            transition: 'filter 150ms ease-out',
            filter: this.state.isHighlighted ? 'invert(100%)' : ''
        };

        return (
            <span onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
                <Tooltip inverted rounded title={this.props.alt}>
                    <a href={this.props.href} target="_blank">
                        <img src={this.props.src} alt={this.props.alt} width="50%" style={style} />
                    </a>
                </Tooltip>
            </span>
        );
    }
});

export default Icon;
