// --------------------------------------------------
// IMPORT MODULES
// --------------------------------------------------
import React from 'react';


// --------------------------------------------------
// DEFINE COMPONENT
// --------------------------------------------------
export default class App extends React.Component {
    constructor( props ) {
        super( props );

        this.state = {
            DATA: this.props.DATA || []
        }
    } // /constructor()


    render() {
        let items = this.state.DATA.map( ( item ) => { return (<h2>{ item.title }</h2>); }  );

        return (
            <div>
                { items }
            </div>
        );
    } // /render()
} // /App