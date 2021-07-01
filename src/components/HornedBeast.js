import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import ListGroup from 'react-bootstrap/ListGroup'
import reactDom from 'react-dom';
import SelectedBeasts from './SelectedBeasts';
import Stylesheet from './Stylesheet.css'


class HornedBeast extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            favorited: 0,
        }
    }

    favorate =() => {
        this.setState({favorited : this.state.favorited + 1}) 
    }
    
    


    render(beastTitle,ImageURL,imageTitle,description,noOfHorns) {
        return (
           
            <Card onClick={this.props.passingBeastInfo} ShowingBeastState={this.ShowingBeastState} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={this.props.ImageURL} alt={this.props.imageTitle} title = {this.props.imageTitle} />
            <Card.Body>
                <Card.Title>{this.props.beastTitle}</Card.Title>
                <Card.Text>
                {this.props.description}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem  onClick={this.favorate}>🖤 {this.state.favorited}</ListGroupItem>
            </ListGroup>
            {/* <Card.Body> */}
                {/* <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link> */}
            {/* </Card.Body> */}
            </Card> 
            
        )
    }
}

export default HornedBeast;


