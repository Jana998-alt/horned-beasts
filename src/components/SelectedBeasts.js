import React from 'react';
import { Modal } from 'bootstrap';
import HornedBeast from './HornedBeast';
import Main from './Main';
import App from '../App';


class SelectedBeasts extends React.Component {
    render (){

            return(
                <div>
                    <SelectedBeasts show={this.state.showingABeast}/>
                </div>
            )
            console.console.log("hi");

        // const [show, setShow] = useState(false);
        // const handleClose = () => setShow(false);
        // const handleShow = () => setShow(true);


        // return(
        // <Modal show={show} onHide={handleClose}>
        // <Modal.Header closeButton>
        // <Modal.Title>{this.props.beastTitle}</Modal.Title>
        // </Modal.Header>
        // <Modal.Body>{this.props.description}</Modal.Body>
        // <Modal.Footer>
        // <Button variant="secondary" onClick={handleClose}>
        //     Close
        // </Button>
        // <Button variant="primary" onClick={handleClose}>
        //     Save Changes
        // </Button>
        // </Modal.Footer>
        // </Modal>
        // )
        
    }
}

export default SelectedBeasts;
