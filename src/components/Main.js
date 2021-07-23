import React from 'react';
import reactDom from 'react-dom';
import HornedBeast from './HornedBeast';
import Beasts from './Beasts.json'
import SelectedBeasts from './SelectedBeasts';
import CardsStyleSheet from './CardsStyleSheet.css'
import DropdownElement from './Dropdown';


// jana = this.props.changeShowingBeastState ==> this is the function that I passed
class Main extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            noOfHornes: 'All',

        }
    }

    mapFunction = () =>{

        if (this.state.noOfHornes == 'All') {
            return Beasts.map(beast => { return (<HornedBeast className="Card" beast={beast} changeShowingBeastState={this.props.changeShowingBeastState} description={beast.description} ImageURL={beast.image_url} beastTitle={beast.title} imageTitle={beast.narwhal} noOfHorns={beast.horns} key={beast.title} />) })
        }

        else {
            let filteredBeasts = Beasts.filter((beast) => {
                
                if (beast.horns === parseInt(this.state.noOfHornes)) {
                    return true;
                }
            })

            return filteredBeasts.map(beast => { return (<HornedBeast className="Card" beast={beast} changeShowingBeastState={this.props.changeShowingBeastState} description={beast.description} ImageURL={beast.image_url} beastTitle={beast.title} imageTitle={beast.narwhal} noOfHorns={beast.horns} key={beast.title} />) })
        }
        
    }

    filterHornes = (event) => {
        event.preventDefault();
        this.setState({
            noOfHornes: event.target.value,
        })

       

    }

    render() {
        return (
            <>
                <DropdownElement filterHornes={this.filterHornes} />

                <div className="cardGrid">

                {
                this.mapFunction()
                }

                </div>

            </>
        )
    }
}


export default Main;

