import React from 'react';
import reactDom from 'react-dom';

class HornedBeast extends React.Component {
    render(beastTitle,ImageURL,imageTitle,description,noOfHorns) {
        return (
            <div>
                <h2>{this.props.beastTitle}</h2>
                <img src={this.props.ImageURL} alt={this.props.imageTitle} title = {this.props.imageTitle}/>
                <p>{this.props.description}</p>
            </div>
        )
    }
}

export default HornedBeast;