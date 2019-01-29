import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Particles from 'react-particles-js'

const ParticlesOptions = {
  particles: {
    number: {
      value:80,
      density:{
        enable:true,
        value_area:500,
      }
    }
}
}



class App extends Component {
  render() {
    return (
      <div className="App">
       <Particles className='Particles'
       params ={ParticlesOptions}
       />
       <Navigation />
       <Logo />
       < ImageLinkForm/>
      </div>
    );
  }
}

export default App;
