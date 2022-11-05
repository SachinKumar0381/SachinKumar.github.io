import React from 'react'
import { AttentionSeeker } from 'react-awesome-reveal';
import helloLight from '../media/sachin.jpg';
import helloDark from '../media/sachin.jpg';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/esm/Row';
import Container from 'react-bootstrap/esm/Container';

const Home = ({darkMode}) => {
    return (
        <div>
            <AttentionSeeker shakeX>
            <Row>
                    <Col lg={12} xs={12}>
                <h1 className="display-3 hello" align="center">HELLO!<code> I'm Sachin</code></h1>
                <h2 className="lead" align="center"> Full-Stack Web Developer </h2>
                </Col>
                </Row>
                <Row>
                    <Container align="center">
                    <Col lg={9} xs={12}>
                  <img src={darkMode? helloDark : helloLight} alt="hello" className="hello-img"/>
                </Col>
                </Container>
                </Row>
            </AttentionSeeker>
            <br></br>
            <hr></hr>
        </div>
    )
}

export default Home
