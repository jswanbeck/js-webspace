import React from 'react';
import { Card, CardImage, Text, Heading, Section, SectionHeader, Block, Badge, Divider, Container } from 'rebass';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Recipes from './Recipes';

var styles = {
    ul: {
        listStyle: 'circle',
        paddingLeft: 'inherit',
    },
    Heading: {
        textAlign: 'center',
    }
};

var Stuff = React.createClass({
    render: function () {
        return (
            <Container>
                <SectionHeader description='Recipes' />
                <Recipes />
            </Container>
        );
    }
});

export default Stuff;
