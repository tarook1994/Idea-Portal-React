import React from 'react';
import './CenteredModal.css'
import { Form, Col } from 'react-bootstrap'

const centeredModal = (props) => {
    let Modalstyle = 'hover_bkgr_fricc'
    if (props.show == false) {
        Modalstyle = 'hover_bkgr_fricc_none'
    }
    console.log(props.show)
    return (
        <div className={Modalstyle} >
            <span className="helper"></span>
            <div className="content-holder">
                <h1>New Idea</h1>
                <Form>
                    <Form.Row style={{
                        marginBottom:'16px'
                    }}>
                        <Col>
                            <Form.Control placeholder="Idea name" />
                        </Col>
                        <Col>
                            <Form.Control placeholder="Last name" />
                        </Col>
                    </Form.Row>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" rows="3" placeholder=
                            'Description' />
                    </Form.Group>
                </Form>
                <button id='primary-button'>Add</button>
                <button id='red-button' onClick={props.cancel}>Cancel</button>
            </div>
        </div>

    )
}


export default centeredModal;