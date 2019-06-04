import React, { Component } from 'react';
import NavBar from '../../Layouts/NavBar/NavBar'
import SideNav from '../../Layouts/SideNav/SideNav';
import { Card, Col, Container, Row, InputGroup, FormControl, Button } from 'react-bootstrap'

class MainPage extends Component {
    state = {

    }


    render() {
        return (
            <div className='main-page-container'>
                <NavBar />
                <SideNav />
                <div style={{
                    marginTop:'84px',
                    marginLeft:'280px',
                    marginRight: '15px'
                }}>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Recipient's username"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                        />
                        <InputGroup.Append>
                            <Button variant="primary">Search</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </div>

                <Container style={{
                    marginLeft: '260px',
                    marginTop: '80px',
                    marginRight: '0px'
                }} fluid>
                    <Row>
                        <Col sm >
                            <Card bg="primary" text="white" style={{ width: '18rem' }}>
                                <Card.Header>Header</Card.Header>
                                <Card.Body>
                                    <Card.Title>Primary Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk
                                        of the card's content.
                              </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card bg="secondary" text="white" style={{ width: '18rem' }}>
                                <Card.Header>Header</Card.Header>
                                <Card.Body>
                                    <Card.Title>Secondary Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk
                                        of the card's content.
                             </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card bg="success" text="white" style={{ width: '18rem' }}>
                                <Card.Header>Header</Card.Header>
                                <Card.Body>
                                    <Card.Title>Success Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk
                                        of the card's content.
                              </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <br></br>
                    <Row sm>
                        <Col>
                            <Card bg="danger" text="white" style={{ width: '18rem' }}>
                                <Card.Header>Header</Card.Header>
                                <Card.Body>
                                    <Card.Title>Danger Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk
                                        of the card's content.
                             </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col>
                            <Card bg="warning" text="white" style={{ width: '18rem' }}>
                                <Card.Header>Header</Card.Header>
                                <Card.Body>
                                    <Card.Title>Warning Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk
                                        of the card's content.
                               </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col>
                            <Card bg="info" text="white" style={{ width: '18rem', marginRight: '0px' }}>
                                <Card.Header>Header</Card.Header>
                                <Card.Body>
                                    <Card.Title>Info Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk
                                        of the card's content.
                             </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <br></br>

                </Container>

            </div >
        )
    }
}
export default MainPage