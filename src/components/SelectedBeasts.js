import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './ModalStylesheet.css';



class SelectedBeasts extends React.Component {
    render (){
        {console.log(this.props.clickedBeast)}
            return(
             
                <Modal show={this.props.showingABeast} onHide={this.props.handleClose} className="Modal">
                <Modal.Header closeButton>
                  <Modal.Title>{this.props.clickedBeast.title}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                  <img className="modalImg" src={this.props.clickedBeast.image_url} alt={this.props.clickedBeast.title} title = {this.props.clickedBeast.title} />
                  <p>{this.props.clickedBeast.description}</p>
                  </Modal.Body>

                <Modal.Footer>
                  <Button variant="secondary" onClick={this.props.handleClose}>
                    Close 
                  </Button>
                </Modal.Footer>
              </Modal>

            )
        
     }
}

export default SelectedBeasts;

// {this.props.beastTitle}