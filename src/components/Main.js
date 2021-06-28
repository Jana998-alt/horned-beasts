import React from 'react';
import hornedBeast from './hornedBeast';

const Main = () => {
    return(
        <div>
            <hornedBeast description="lorum epsum" ImageURL = "" beastTitle= "title 1" imageTitle="image1"/>
            <hornedBeast description="lorum epsum 2" ImageURL = "" beastTitle= "title 2" imageTitle="image2"/>
        </div>
        

    )
}

export default Main;

// hornedBeast('beast1 ','./public/logo192.png','lorum epsum')