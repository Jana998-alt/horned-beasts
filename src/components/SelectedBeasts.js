import React from 'react';
import { Modal } from 'bootstrap';


class SelectedBeasts extends React.Component {
    render (){
    // if (showing){
        console.log('hi');
        return(
        <Modal show={true}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.beastTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{this.props.description}</Modal.Body>
      </Modal> 
      
        )
        }
    // }
}

export default SelectedBeasts;

{/* <Modal show={showing} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.beastTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{this.props.description}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>  */}