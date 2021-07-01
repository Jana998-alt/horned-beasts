import React from 'react';
import reactDom from 'react-dom';
import './App.css';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Beasts from './components/Beasts.json';
import SelectedBeasts from './components/SelectedBeasts';


class App extends React.Component {
  
  constructor (props){
    super(props);
    this.state={        
      showingABeast : false,
      clickedBeast : {},
      
    }

    
  }


//   findingTheSelectedBeast =()=> {
//     let found = Beasts.find(this.props.beast);
//     this.setState({
//         clickedBeast : found,
//     })
//     this.setState({showingABeast : true,
// });
// }
  changeShowingBeastState = () => {
   
    // let found = Beasts.find(this.state.clickedBeast);
        this.setState({
            // clickedBeast : found,
            showingABeast : true,
        })
    
  }

  handleClose = () => {
    this.setState({showingABeast : false})
  }
  
  render () {
    return (
      <div className="App">
        <Header />
        <Main ShowingBeastState = {this.state.showingABeast} changeShowingBeastState={this.changeShowingBeastState} />
        <SelectedBeasts handleClose={this.handleClose} ShowingBeastState={this.state.showingABeast} clickedBeast={this.state.clickedBeast} />
        <Footer />
      </div>
    )
}
}

export default App;
