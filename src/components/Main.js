import React from 'react';
import reactDom from 'react-dom';
import HornedBeast from './HornedBeast';
import Beasts from './Beasts.json'
import SelectedBeasts from './SelectedBeasts';

// jana = this.props.changeShowingBeastState ==> this is the function that I passed
class Main extends React.Component {

    passingBeastInfo = () => {
        this.setState({clickedBeast: this.beast});
        this.props.changeShowingBeastState();
    }
    

   render (){
        return(
            <div>
                {Beasts.map(beast=>{

                    return(
                        <HornedBeast beast={beast} passingBeastInfo={this.passingBeastInfo} findingTheSelectedBeast={this.findingTheSelectedBeast} ShowingBeastState={this.ShowingBeastState} changeShowingBeastState={this.props.changeShowingBeastState} description={beast.description} ImageURL={beast.image_url} beastTitle={beast.title} imageTitle={beast.narwhal} noOfHorns={beast.horns} key={beast.title}/>
                       )
                   }

                   ) 
                }

            </div>
        )
   }
}

export default Main;

// hornedBeast('beast1 ','./public/logo192.png','lorum epsum')
