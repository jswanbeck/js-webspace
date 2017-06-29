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

    animationStyles: {
        link: {
            isHighlighted: {
                padding: 10,
                borderRadius: 20,
                transition: 'color,background-color 300ms ease-out',
                color: 'white',
                backgroundColor: styles.colors.primary,
            },
            notHighlighted: {
                padding: 10,
                borderRadius: 20,
                transition: 'color,background-color 300ms ease-out',
            },
        },
        file: {
            transition: 'background-color 300ms ease-out',
        },
    },

    renderLink: function () {
        var style = this.state.isHighlighted 
            ? this.animationStyles.link.isHighlighted 
            : this.animationStyles.link.notHighlighted;

        return (
            <NavItem to={this.props.to} is={Link} children={this.props.children}>
                <span style={style}>
                    {this.props.label}
                </span>
            </NavItem>
        );
    },

    renderFile: function () {
        var theme = this.state.isHighlighted ? "secondary" : "primary";
        var style = this.animationStyles.file;

        return (
            <NavItem href={this.props.to} is="a" target="_blank">
                <Badge theme={theme} style={style} p={1}>
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
