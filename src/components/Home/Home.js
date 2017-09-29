import React from 'react';
import { Avatar, Card, Section, SectionHeader, Block, Donut, Heading, Text, Badge, Divider, Base } from 'rebass';
import { Row, Col } from 'react-flexbox-grid';
import Icon from '../Icon';

var icons = {
    linkedin: {
        href: 'https://www.linkedin.com/in/jimmyswanbeck',
        src: require('../../img/icons/linkedin.svg'),
        alt: 'LinkedIn'
    },
    github: {
        href: 'https://github.com/jswanbeck',
        src: require('../../img/icons/github.svg'),
        alt: 'GitHub'
    },
    facebook: {
        href: 'https://www.facebook.com/jimmy.swanbeck',
        src: require('../../img/icons/facebook.svg'),
        alt: 'Facebook'
    },
    instagram: {
        href: 'https://www.instagram.com/jswan121',
        src: require('../../img/icons/instagram.svg'),
        alt: 'Instagram'
    },
    twitter: {
        href: 'https://twitter.com/JSwan121',
        src: require('../../img/icons/twitter.svg'),
        alt: 'Twitter'
    },
    email: {
        href: 'mailto:jimmy.swanbeck@gmail.com',
        src: require('../../img/icons/email.svg'),
        alt: 'Email'
    },
}

var styles = {
    ul: {
        listStyle: "circle",
    },
    transparentBorder: {
        backgroundColor: `rgba(0, 0, 0, ${1/8})`,
        padding: 6,
    },
};

const Home = () => (
    <Section>
        <Row center="xs">
            <Col xs>
                <Base px={3} m={0} >
                    <Card width={'100%'} p={2} >
                        <Avatar circle size={160} src={require('../../img/photos/profile.jpg')} backgroundColor="primary" style={styles.transparentBorder} />
                        <Heading level={2} size={3} >
                            Jimmy Swanbeck
                        </Heading>
                        <Divider m={1} />
                        <Text>
                            Software Engineer
                        </Text>
                    </Card>
                </Base>
            </Col>
            <Col xs>
                <Divider mt={0} />
                <Text style={{ textAlign: "left" }}>
                    Software engineer with development experience across multiple platforms. Quick learner with the motivation to self-teach new concepts and set them to practical application. Most experienced with web application development, but also passionate about cyber security and artificial intelligence with a general love of problem solving.
                </Text>
                <Block>
                    <Divider />
                    <Row>
                        <Col xs>
                            <Icon {...icons.linkedin} />
                        </Col>
                        <Col xs>
                            <Icon {...icons.github} />
                        </Col>
                        <Col xs>
                            <Icon {...icons.facebook} />
                        </Col>
                        <Col xs>
                            <Icon {...icons.instagram} />
                        </Col>
                        <Col xs>
                            <Icon {...icons.twitter} />
                        </Col>
                        <Col xs>
                            <Icon {...icons.email} />
                        </Col>
                    </Row>
                </Block>
            </Col>
        </Row>
        <Row>
            <Col xs>
                <SectionHeader description='Skills' />
                <Donut color="primary" size={85} strokeWidth={8} m={1} >
                    Python
                </Donut>
                <Donut color="primary" size={85} strokeWidth={8} m={1} >
                    Ruby
                </Donut>
                <Donut color="primary" size={85} strokeWidth={8} m={1} >
                    PHP
                </Donut>
                <Donut color="primary" size={85} strokeWidth={8} m={1} >
                    Javascript
                </Donut>
                <Donut color="primary" size={85} strokeWidth={8} m={1} >
                    React
                </Donut>
                <Donut color="primary" size={85} strokeWidth={8} m={1} >
                    Docker
                </Donut>
                <Donut color="primary" size={85} strokeWidth={8} m={1} >
                    Git
                </Donut>
                <Donut color="primary" size={85} strokeWidth={8} m={1} >
                    Linux
                </Donut>
            </Col>
            <Col xs>
                <SectionHeader description='Education' />
                <Row>
                    <Block borderLeft px={2} m={2} >
                        <Text bold>
                            Endicott College
                        </Text>
                        <Text>
                            Computer Science, 2012 - 2015
                        </Text>
                        <Text>
                            <Badge pill theme="primary" px={1} mr={1} mb={1} >Bachelor's Degree</Badge>
                            <Badge pill theme="primary" px={1} mr={1} mb={1} >Magna Cum Laude</Badge>
                        </Text>
                    </Block>
                </Row>
                <Row>
                    <Block borderLeft px={2} m={2} >
                        <Text bold>
                            University of Massachusetts Lowell
                        </Text>
                        <Text>
                            Biology, 2011 - 2012
                        </Text>
                    </Block>
                </Row>
            </Col>
        </Row>
        <SectionHeader description='Experience' />
        <Row>
            <Col xs>
                <Block m={1} pl={1} >
                    <Row center="xs" >
                        <Base style={styles.transparentBorder} >
                            <Badge theme="primary" py={2} >
                                <Text bold>
                                    BAE Systems Applied Intelligence
                                </Text>
                            </Badge>
                        </Base>
                    </Row>
                    <Divider />
                    <Row center="xs">
                        <Col xs>
                            <Text>
                                Software Engineer
                            </Text>
                        </Col>
                        <Col xs>
                            <Text>
                                June 2015 - Present
                            </Text>
                        </Col>
                    </Row>
                    <Divider />
                </Block>
                <Block m={1} >
                    <ul style={styles.ul}>
                        <li>Test-driven development of BAE Systems’ Secure Management Console (SMC) application (incorporating their entire cyber security product suite) in PHP and Javascript on a Symfony framework, utilizing object-oriented models to build a robust architecture that allows for scalability.</li>
                        <br />
                        <li>Key role in the engineering of the new Managed Security Services (MSS) product. Responsible for the development of several brand new features and APIs as well as the overhaul / re-creation of legacy infrastructures.</li>
                        <br />
                        <li>Design and implementation of data-driven microservices in Python to handle various internal data transfers, often integrating third party libraries and solutions.</li>
                        <br />
                        <li>Employed Git workflows to partition development lines along major release and feature branches.</li>
                        <br />
                        <li>Leveraged Docker for rapid prototyping of new services and containerization of existing services – primarily developed on (and deployed to) hosts running various Linux distributions and releases.</li>
                    </ul>
                </Block>
            </Col>
            <Col xs>
                <Block m={1} pl={1} >
                    <Row center="xs" >
                        <Base style={styles.transparentBorder} >
                            <Badge theme="primary" py={2} >
                                <Text bold>
                                    SilverSky / BAE Systems
                                </Text>
                            </Badge>
                        </Base>
                    </Row>
                    <Divider />
                    <Row center="xs">
                        <Col xs>
                            <Text>
                                Developer Intern
                            </Text>
                        </Col>
                        <Col xs>
                            <Text>
                                June 2014 - May 2015
                            </Text>
                        </Col>
                    </Row>
                    <Divider />
                </Block>
                <Block m={1} >
                    <ul style={styles.ul}>
                        <li>Extension and implementation of SilverSky's Network Security Console (NSC) product line; authored an implementation of a single sign-on feature to integrate existing services into a “single pane of glass.”</li>
                        <br />
                        <li>Created python utilities for legacy customers' migration to a new platform; database targets included Oracle SQL, MySQL, and MSSQL; supported both command-line and REST invocation.</li>
                        <br />
                        <li>Full-stack maintenance of the ViewPoint web application, SilverSky's premier network security monitoring product; technologies included the C# / ASP.NET frontend, Java middleware, and MySQL backend.</li>
                        <br />
                        <li>Designed a REST API for internal use to communicate with the asset tracking server (containing customer product info and other account services). Written using Bottle Python web framework, hosted with Docker. This API is still in use today as an important part of the company’s managed security service.</li>
                    </ul>
                </Block>
            </Col>
        </Row>
    </Section>
);

export default Home;
