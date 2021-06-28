import React from 'react';
import reactDom from 'react-dom';


class HornedBeast extends React.Component {
    constructor(props){
        super(props);
        this.state = {favorited: 0}
    
    }

    favorate =() => {
        this.setState({favorited : this.state.favorited + 1}) 
    }

    render(beastTitle,ImageURL,imageTitle,description,noOfHorns) {
        return (
            <div>
                <h2>{this.props.beastTitle}</h2>
                <img src={this.props.ImageURL} alt={this.props.imageTitle} title = {this.props.imageTitle} onClick={this.favorate} />
                <p>{this.props.description}</p>
                <p>🖤 {this.state.favorited}</p>
            </div>
        )
    }
}

export default HornedBeast;