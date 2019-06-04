import React from 'react';
import './CenteredModal.css'
import {Button} from 'react-bootstrap'

const centeredModal = (props) => {
    let Modalstyle = 'hover_bkgr_fricc'
    if(props.show==false){
        Modalstyle = 'hover_bkgr_fricc_none'
    }
    console.log(props.show)
    return (
        <div className={Modalstyle} >
            <span className="helper"></span>
            <div className="content-holder">
                <p className="name">Ahmed</p>

                <p>asdasdasdasda</p>
                <div className="button-container">
                <Button variant="primary" block onClick={props.addClick}>Add</Button>
            </div>  
            </div>
        </div>

    )
}


export default centeredModal;