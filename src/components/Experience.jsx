import { React } from 'react'
import { Zoom, Fade } from 'react-awesome-reveal'
import styleCraze from '../media/stylecraze.png'
import exp from '../media/meanbuy.png'
import fresh from '../media/freshly.png'
import netmeds from '../media/netmeds.png'
import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/esm/Button'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Card from 'react-bootstrap/esm/Card'

const Experience = ({darkMode}) => {


    return (
        <div data-theme={darkMode ? "dark" : "light"}>
            <br></br>
            <Fade>
            <Container>
                <br></br>
                <h2 className="lead" align="center"><b>- Projects -</b></h2>
                <br></br>
                <Zoom>
                <Row>
                    <Col lg={4} sm={12}>
                        <Card align="center" className="exp" data-theme={darkMode ? "dark" : "light"}>
                        <br></br>
                        <center>
                            <div class="flip-card">
                                <div class="flip-card-inner">
                                    <div className="flip-card-front">
                                        <Card.Img variant="top" src={fresh}/>
                                        <Card.Body>
                                            <Card.Title align="center">Freshly Clone</Card.Title>
                                            <Card.Text>
                                                <p align="center">A website sells a wide variety of prepared meals.</p>
                                                <p>Redux | React | Chakra UI | JavaScript | HTML | CSS</p>
                                            </Card.Text>
                                        </Card.Body>
                                    </div>
                                    <div className="flip-card-back">
                                        <p>Features:</p>
                                        <li>Displays a wide variety of meals.</li>
                                        <li>Show meal ingredients, nutrients, and other details.</li>
                                        <li>Show meal details, prices, and offers with a sorting algorithm.</li>
                                        <li>User validation, checkout, and alerts.</li>
                                    </div> 
                                </div>
                            </div>
                        </center>
                        <br></br>
                        <div>
                            <a href="https://freshly-cloned.netlify.app/" target="_blank" rel="noreferrer noopener">
                            <Button variant={darkMode ? "outline-light" : "outline-dark"} className="sbtn">View Project</Button>
                            </a>
                            <a href="https://github.com/SachinKumar0381/punchy-car-5123/tree/main/freshly" target="_blank" rel="noreferrer noopener">
                            <Button variant={darkMode ? "outline-light" : "outline-dark"} className="sbtn">View Github Repo</Button>
                            </a>
                        </div>
                        <br></br>
                        </Card>
                    </Col>





                    <Col lg={4} sm={12}>
                        <Card align="center" className="exp" data-theme={darkMode ? "dark" : "light"}>
                        <br></br>
                        <center>
                            <div class="flip-card">
                                <div class="flip-card-inner">
                                    <div className="flip-card-front">
                                        <Card.Img variant="top" src={styleCraze}/>
                                        <Card.Body>
                                            <Card.Title align="center">StyleCraze Clone</Card.Title>
                                            <Card.Text>
                                                <p align="center">Stylecraze is a women's fashion and wellness community to get solutions to beauty and health queries.</p>
                                                <p>React | JavaScript | HTML | CSS</p>
                                            </Card.Text>
                                        </Card.Body>
                                    </div>
                                    <div className="flip-card-back">
                                        <p>Features:</p>
                                        <li>Content regarding beauty and health.</li>
                                        <li>Displays a wide variety of products.</li>
                                        <li>Product detail.</li>
                                        <li>Tools and body index calculator.</li>
                                    </div> 
                                </div>
                            </div>
                        </center>
                        <br></br>
                        <div>
                            <a href="https://style-craze-clone.netlify.app/" target="_blank" rel="noreferrer noopener">
                            <Button variant={darkMode ? "outline-light" : "outline-dark"} className="sbtn">View Project</Button>
                            </a>
                            <a href="https://github.com/SachinKumar0381/honest-tramp-5489" target="_blank" rel="noreferrer noopener">
                            <Button variant={darkMode ? "outline-light" : "outline-dark"} className="sbtn">View Github Repo</Button>
                            </a>
                        </div>
                        <br></br>
                        </Card>
                    </Col>







                    <Col lg={4} sm={12}>
                        <Card align="center" className="exp" data-theme={darkMode ? "dark" : "light"}>
                        <br></br>
                        <center>
                            <div class="flip-card">
                                <div class="flip-card-inner">
                                    <div className="flip-card-front">
                                        <Card.Img variant="top" src={netmeds}/>
                                        <Card.Body>
                                            <Card.Title align="center">Netmeds Clone</Card.Title>
                                            <Card.Text>
                                                <p align="center">A website sells a wide variety of medical products and health products.</p>
                                                <p> JavaScript | HTML | CSS</p>
                                            </Card.Text>
                                        </Card.Body>
                                    </div>
                                    <div className="flip-card-back">
                                        <p>Features:</p>
                                        <li>Displays a wide variety of products.</li>
                                        <li>Show product details, prices, and offers with a sorting algorithm.</li>
                                        <li>User validation, checkout, and alerts.</li>
                                    </div> 
                                </div>
                            </div>
                        </center>
                        <br></br>
                        <div>
                            <a href="https://netmedsclone-u3.netlify.app/" target="_blank" rel="noreferrer noopener">
                            <Button variant={darkMode ? "outline-light" : "outline-dark"} className="sbtn">View Project</Button>
                            </a>
                            <a href="https://github.com/g-utsav/NetMedsClone" target="_blank" rel="noreferrer noopener">
                            <Button variant={darkMode ? "outline-light" : "outline-dark"} className="sbtn">View Github Repo</Button>
                            </a>
                        </div>
                        <br></br>
                        </Card>
                    </Col>







                    <Col lg={4} sm={12}>
                        <Card align="center" className="exp" data-theme={darkMode ? "dark" : "light"}>
                        <br></br>
                        <center>
                            <div class="flip-card">
                                <div class="flip-card-inner">
                                    <div className="flip-card-front">
                                        <Card.Img variant="top" src={exp}/>
                                        <Card.Body>
                                            <Card.Title align="center">Meanbuy Clone</Card.Title>
                                            <Card.Text>
                                                <p align="center">A website selling a wide variety of products across several categories.</p>
                                                <p>JavaScript | HTML | CSS</p>
                                            </Card.Text>
                                        </Card.Body>
                                    </div>
                                    <div className="flip-card-back">
                                        <p>Features:</p>
                                        <li>Display products along with their details and offers.</li>
                                        <li>A sorting algorithm that can sort products by their price and name.</li>
                                        <li>User authentication</li>
                                        <li>User validation, checkout, and alerts.</li>
                                    </div> 
                                </div>
                            </div>
                        </center>
                        <br></br>
                        <div>
                            <a href="https://meanbuyclone.netlify.app/home.html" target="_blank" rel="noreferrer noopener">
                            <Button variant={darkMode ? "outline-light" : "outline-dark"} className="sbtn">View Project</Button>
                            </a>
                            <a href="https://github.com/bindraj1998/project-clone" target="_blank" rel="noreferrer noopener">
                            <Button variant={darkMode ? "outline-light" : "outline-dark"} className="sbtn">View Github Repo</Button>
                            </a>
                        </div>
                        <br></br>
                        </Card>
                    </Col>
                   
                    
                </Row>
                </Zoom>
                <br></br>
                <>
                
                </>
            </Container>
            </Fade>
            <br></br>
            <br></br>
        </div>
    )
}

export default Experience
