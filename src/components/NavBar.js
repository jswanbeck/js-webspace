import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Toolbar, NavItem, Message, Button, Space, Badge } from 'rebass';
import styles from '../styles';

var NavButton = React.createClass({
    getInitialState: function () {
        return ({
            isHighlighted: false,
        });
    },

    onMouseEnter: function () {
        this.setState({ isHighlighted: true });
    },

    onMouseLeave: function () {
        this.setState({ isHighlighted: false });
    },

    renderLink: function () {
        var style = ! this.state.isHighlighted ? {} :
        {
            color: 'white',
            backgroundColor: styles.colors.primary,
            borderRadius: 20
        };

        style.padding = 10;

        return (
            <NavItem to={this.props.to} is={Link} children={this.props.children}>
                <span style={style}>
                    {this.props.label}
                </span>
            </NavItem>
        );
    },

    renderFile: function () {
        var theme = ! this.state.isHighlighted ? "primary" : "secondary";

        return (
            <NavItem href={this.props.to} is="a" target="_blank">
                <Badge theme={theme} p={1}>
                    {this.props.label}
                </Badge>
            </NavItem>
        );
    },

    render: function () { 
        return (
            <span onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
                { this.props.isFile ? this.renderFile() : this.renderLink() }
            </span>
        );
    }
});

const NavBar = () => (
    <Toolbar>
        <NavButton to="/" children='Home' label='Home' isFile={false}/>
        <NavButton to="/stuff" children='Stuff' label='Stuff' isFile={false}/>
        <NavButton to="/projects" children='Projects' label='Projects' isFile={false}/>
        <Space auto x={1} />
        <NavButton to={require('../files/jimmy-swanbeck-resume.pdf')} children='' label='Resume' isFile={true}/>
    </Toolbar>
);

export default NavBar;
