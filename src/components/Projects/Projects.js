import React from 'react';
import { Avatar, Base, Button, Card, Divider, Heading, Section, Space, Text } from 'rebass';
import { Row, Col } from 'react-flexbox-grid';

var styles = {
    transparentBorder: {
        backgroundColor: `rgba(0, 0, 0, ${1/8})`,
        padding: 6,
    },
};

var Projects = React.createClass({
    render: function () {
        return (
            <Section>
                <Base px={3} m={0}>
                    <Row left="xs">
                        <Col xs={4}>
                            <Card p={2} >
                                <Row center="xs">
                                    <Avatar circle size={160} src={require('../../img/photos/mbta.png')} backgroundColor="primary" style={styles.transparentBorder} />
                                </Row>
                            </Card>
                        </Col>
                        <Col xs={8}>
                            <Heading level={2} size={3} >
                                <Button href="http://mbta.jimmyswanbeck.com/" target="_blank" children="MBTA Statistics" />
                                <Space auto x={1} />
                            </Heading>
                            <Divider m={1} />
                            <Text>
                                Ruby on Rails web application utilizing the MBTA developer API to create a set of dashboards displaying realtime data on service alerts, predictions, and stops along various routes.
                            </Text>
                        </Col>
                    </Row>
                </Base>
            </Section>
        );
    }
});

export default Projects;
