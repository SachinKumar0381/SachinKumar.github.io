import React from 'react'
import { Fade } from "react-awesome-reveal";
import './styles.css';
import connectLight from '../media/connect-light.png';
import connectDark from '../media/connect-dark.png';
import resume from '../media/Sachin_Kumar_Resume_12-09-2022-18-40-12.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

const About = ({darkMode}) => {

    var TxtRotate = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };
      
    TxtRotate.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];
      
        if (this.isDeleting) {
          this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
          this.txt = fullTxt.substring(0, this.txt.length + 1);
        }
      
        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
      
        var that = this;
        var delta = 300 - Math.random() * 100;
      
        if (this.isDeleting) { delta /= 2; }
      
        if (!this.isDeleting && this.txt === fullTxt) {
          delta = this.period;
          this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
          this.isDeleting = false;
          this.loopNum++;
          delta = 500;
        }
      
        setTimeout(function() {
          that.tick();
        }, delta);
      };
      
    window.onload = function() {
        var elements = document.getElementsByClassName('txt-rotate');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-rotate');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
                new TxtRotate(elements[i], JSON.parse(toRotate), period);
            }
        }

        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
        document.body.appendChild(css);
    };

    return (
        <div>
          <br></br>
          <br></br>
            <Fade>
              <Container align='center'>
                <Row>
                  <Col lg={8} align='center'>
                    <Card className="nbcard">
                      <Card.Body>
                        <Card.Title><h2 className="lead">Let's have an introduction!</h2></Card.Title>
                        <br></br>
                        <Card.Text>
                          <p>Self-motivated full stack web developer with the ability to plan and execute. Dedicated professional with a passion to create user-friendly applications. Seeking to utilize my skills and knowledge and contribute positively to the growth of the organization.</p>
                        </Card.Text>
                        <a href={resume} target="_blank" rel="noreferrer noopener">
                        <Button variant={darkMode ? "outline-light" : "outline-dark"} className='a'>
                          <FontAwesomeIcon className="dark" size="lg" icon={faFile}/> View Resume
                        </Button>
                        </a>
                        <a href={resume} download>
                        <Button variant={darkMode ? "outline-light" : "outline-dark"} className='a'>
                          <FontAwesomeIcon className="dark" size="lg" icon={faFile}/> Download Resume
                        </Button>
                        </a>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col lg={4} align='center'>
                    <Card className="nbcard">
                      <Card.Body>
                        <Card.Title><h2 className="lead">Let's Connect!</h2></Card.Title>
                        <br></br>
                        <a href="https://www.linkedin.com/in/sachin-kumar-523a20233/" target="_blank" rel="noreferrer noopener">
                          <Button variant={darkMode ? "outline-light" : "outline-dark"} className='a'>
                            <FontAwesomeIcon className="dark" size="lg" icon={faLinkedin}/><br/> Sachin Kumar
                          </Button>
                        </a>
                        <a href="https://github.com/SachinKumar0381" target="_blank" rel="noreferrer noopener">
                          <Button variant={darkMode ? "outline-light" : "outline-dark"} className='a'>
                            <FontAwesomeIcon className="dark" size="lg" icon={faGithub}/><br/> Sachin Kumar
                          </Button>
                        </a>
                        <img src={darkMode? connectDark : connectLight} alt="connect" className="connect-img img-fluid animated"/>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
                <br></br>
                <hr></hr>
                <br></br>
              </Container>
            </Fade>
        </div>   
    )
}

export default About
