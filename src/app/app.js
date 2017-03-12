// --------------------------------------------------
// IMPORT MODULES
// --------------------------------------------------
import React from 'react';


// --------------------------------------------------
// IMPORT COMPONENTS
// --------------------------------------------------
import Card from '../components/card';


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
        let items = this.state.DATA.map(
            ( item, i ) => {
                return <Card data={ item } key={ i } showPage={ this.showPage.bind( this ) } />
            }
        );

        return (
            <div>
                { items }
            </div>
        );
    } // /render()


    showPage( pageData ) {
        console.log( 'INSIDE `showPage`' );
        console.log( 'LOGGING OUT `pageData`' );

        console.log( pageData );
    }
} // /App