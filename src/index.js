import React from 'react';
import ReactDOM from 'react-dom';
import '../assets/styles/style.css';
import AppContainer from './containers/AppContainer';
console.log('Hlelo');
// MOUNT REACT
const mount = document.getElementById('root');
ReactDOM.render(<AppContainer />, mount);
