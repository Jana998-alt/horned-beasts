import React from 'react';
import reactDom from 'react-dom';
import HornedBeast from './HornedBeast';
import Beasts from './Beasts.json'
import SelectedBeasts from './SelectedBeasts';
import CardsStyleSheet from './CardsStyleSheet.css'


// jana = this.props.changeShowingBeastState ==> this is the function that I passed
class Main extends React.Component {

    
    

   render (){
        return(

            <div className="cardGrid">
                {
                    Beasts.map(beast=>{
                    return(
                        <HornedBeast className="Card" beast={beast} changeShowingBeastState= {this.props.changeShowingBeastState} description={beast.description} ImageURL={beast.image_url} beastTitle={beast.title} imageTitle={beast.narwhal} noOfHorns={beast.horns} key={beast.title}/>

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
