import React from 'react';
import { Tooltip } from 'rebass';

class Icon extends React.Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <Tooltip inverted rounded title={this.props.alt}>
                <a href={this.props.href} target="_blank">
                    <img src={this.props.src} alt={this.props.alt} width="50%" />
                </a>
            </Tooltip>
        );
    }
}

export default Icon;
