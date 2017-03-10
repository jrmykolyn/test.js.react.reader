// --------------------------------------------------
// IMPORT MODULES
// --------------------------------------------------
import React from 'react';
import ReactDOM from 'react-dom';


// --------------------------------------------------
// IMPORT ASSETS
// --------------------------------------------------
import './index.html';


// --------------------------------------------------
// IMPORT APP && COMPONENTS
// --------------------------------------------------
import { DATA } from './data/data';
import App from './app/app';


// --------------------------------------------------
// DO PROGRAM
// --------------------------------------------------
ReactDOM.render(
    <App DATA={ DATA } />,
    document.getElementById( 'root' )
);