import React from 'react';
import { Modal } from 'bootstrap';
import { Button } from 'bootstrap';
import HornedBeast from './HornedBeast';
import Main from './Main';
import App from '../App';


class SelectedBeasts extends React.Component {
    render (){
        console.log(this.props.clickedBeast);
            return(
                <h1>hi</h1>)
            //     <Modal show={this.props.ShowingBeastState} onHide={this.props.handleClose}>
            //     <Modal.Header closeButton>
            //     <Modal.Title></Modal.Title>
            //     </Modal.Header>
            //     <Modal.Body></Modal.Body>
            //     <Modal.Footer>
            //     <Button variant="secondary" onClick={this.props.handleClose}>
            //         Close
            //     </Button>
            //     <Button variant="primary" onClick={this.props.handleClose}>
            //         Save Changes
            //     </Button>
            //     </Modal.Footer>
            //     </Modal>
            // )

            
        
     }
}

export default SelectedBeasts;

// {this.props.beastTitle}