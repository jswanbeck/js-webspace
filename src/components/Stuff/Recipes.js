import React from 'react';
import { Card, CardImage, Text, Heading, Section, Divider, Container } from 'rebass';
import { Grid, Row, Col } from 'react-flexbox-grid';
import recipeList from './recipeList';
import styles from '../../styles';

var RecipeListItem = React.createClass({
    getInitialState: function () {
        return { isHighlighted: false };
    },

    onMouseEnter: function () {
        this.setState({ isHighlighted: true });
    },

    onMouseLeave: function () {
        this.setState({ isHighlighted: false });
    },

    animationStyles: {
        isHighlighted: {
            a: {
                textDecoration: 'none', 
                color: 'white',
                transition: 'color 250ms ease-out'
            },
            li: {
                padding: 5, 
                margin: 3, 
                borderRadius: 5, 
                backgroundColor: styles.colors.primary,
                transition: 'background-color 250ms ease-out'
            },
        },
        notHighlighted: {
            a: {
                textDecoration: 'none', 
                color: styles.colors.primary,
                transition: 'color 250ms ease-out'
            },
            li: {
                padding: 5, 
                margin: 3, 
                borderRadius: 5, 
                transition: 'background-color 250ms ease-out'
            },
        },
    },

    render: function () {
        var style = this.state.isHighlighted
            ? this.animationStyles.isHighlighted
            : this.animationStyles.notHighlighted;

        return (
            <a href={this.props.href} target="_blank" style={style.a}>
                <li onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} style={style.li}>
                    {this.props.label}
                </li>
            </a>
        );
    }
});

var Recipes = React.createClass({
    drawRecipes: function (list) {
        var recipes = [];
        for (var recipe in list) {
            recipes.push(<RecipeListItem href={list[recipe]} label={recipe} key={recipe} />);
        }

        return recipes;
    },

    drawCategories: function () {
        var categories = [];
        for (var category in recipeList) {
            categories.push(
                <Col key={category} xs>
                    <Card width={'100%'} p={2} style={{ height: '100%' }} >
                        <Heading level={2} size={3} style={{ textAlign: 'center' }} >
                            {category}
                        </Heading>
                        <Divider m={1} />
                        <ul style={{ listStyle: 'circle', paddingLeft: 'inherit' }}>
                            { this.drawRecipes(recipeList[category]) }
                        </ul>
                    </Card>
                </Col>
            );
        }

        return categories;
    },

    render: function () {
        return (
            <Row>
                { this.drawCategories() }
            </Row>
        );
    }
});

export default Recipes;
