import React, { Component } from 'react';
import NavBar from '../../Layouts/NavBar/NavBar'
import SideNav from '../../Layouts/SideNav/SideNav';
import { Card, Col, Container, Row, InputGroup, FormControl, Button } from 'react-bootstrap'
import Modal from '../../Components/Modal/CenteredModal';

class MainPage extends Component {
    state = {
        showModal: false
    }

    addIdeaButtonHandler = () => {
        this.setState({ showModal: true })
    }
    cancelButtonHander = () => {
        this.setState({
            showModal :false
        })
    }


    render() {
        let modalClose = () => this.setState({ showModal: false });

        return (

            <div >
                <Modal show={this.state.showModal}
                cancel = {this.cancelButtonHander}/>
                <NavBar />
                <SideNav addClick={this.addIdeaButtonHandler} />
                <div style={{
                    marginTop: '84px',
                    marginLeft: '280px',
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
                    marginRight: '80px'
                }} >
                    <Row>
                        <Col sm >
                            <Card bg="primary" text="white" >
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
                            <Card bg="secondary" text="white" >
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
                        <Col sm>
                            <Card bg="success" text="white" >
                                <Card.Header>Header</Card.Header>
                                <Card.Body>
                                    <Card.Title>Success Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk
                                        of the card's content.
                              </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col >
                    </Row>
                    <br></br>
                    <Row>
                        <Col sm>
                            <Card bg="danger" text="white" >
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
                            <Card bg="warning" text="white" style={{}}>
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
                            <Card bg="info" text="white" >
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