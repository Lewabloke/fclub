import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './helpers/styles';
import Navigation from './components/header/headerComponent'
import './assets/js/jquery-1.12.4.min.js';
import './assets/js/jquery.easing.1.3.js';
import './assets/js/jquery-migrate-1.2.1.min.js';
import './assets/js/jquery.appear.js';
import './assets/js/slick.min.js';
import './assets/js/stellar.js';
import './assets/js/wow.min.jss';
import './assets/js/stellarnav.min.js';
import './assets/js/main.js';
class App extends Component {
  render() {
    return (
     <Navigation></Navigation>
    );
  }
}

export default App;
