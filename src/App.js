import React from 'react';
import './App.css';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

import Beasts from './components/Beasts.json';
import SelectedBeasts from './components/SelectedBeasts';
import './App.css'


class App extends React.Component {
  
  constructor (props){
    super(props);
    this.state={        
      showingABeast : false,
      clickedBeast : {},
      beast : Beasts,

      
    }

    
  }

  changeShowingBeastState = (title) => {

    let clickedBeast = Beasts.find(beastObject => beastObject.title == title)
    
        this.setState({
            // clickedBeast : found,
            showingABeast : true,
            clickedBeast : clickedBeast,
        })
        console.log(this.state.clickedBeast);
    
  }

  handleClose = () => {
    this.setState({showingABeast : false})
  }

  
    
  
  render () {

    

    return (
      <div className="App">
        <Header />
        <Main ShowingBeastState = {this.state.showingABeast} changeShowingBeastState={this.changeShowingBeastState} />
        <SelectedBeasts handleClose={this.handleClose} showingABeast={this.state.showingABeast} clickedBeast={this.state.clickedBeast} />
        <Footer />
      </div>
    )
}
}

export default App;
