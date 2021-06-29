import React from 'react';
import reactDom from 'react-dom';
import HornedBeast from './HornedBeast';
import Beasts from './Beasts.json'


class Main extends React.Component {
   render (){
        return(
            <div>
                {Beasts.map(beast=>{

                    return(
                        <HornedBeast description={beast.description} ImageURL={beast.image_url} beastTitle={beast.title} imageTitle={beast.narwhal} noOfHorns={beast.horns}/>
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
