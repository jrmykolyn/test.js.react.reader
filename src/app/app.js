// --------------------------------------------------
// IMPORT MODULES
// --------------------------------------------------
import { React } from 'react';


// --------------------------------------------------
// DEFINE COMPONENT
// --------------------------------------------------
export default class App extends React.Component {
    constructor() {
        console.log( 'INSIDE `App` CONSTRUCTOR.' ); /// TEMP
        super();
    } // /constructor()


    render() {
        console.log( 'INSIDE `App` `render()`.' ); /// TEMP

        return (<h1>App</h1>);
    } // /render()
} // /App