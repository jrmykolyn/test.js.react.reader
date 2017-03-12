// --------------------------------------------------
// IMPORT MODULES
// --------------------------------------------------
import React from 'react';


// --------------------------------------------------
// IMPORT COMPONENTS
// --------------------------------------------------
import Page from '../components/page';
import Card from '../components/card';


// --------------------------------------------------
// DEFINE COMPONENT
// --------------------------------------------------
export default class App extends React.Component {
    constructor( props ) {
        super( props );

        this.state = {
            DATA: this.props.DATA || [],
            selectedPage: null
        }
    } // /constructor()


    render() {
        console.log( 'INSIDE `App` `render()`' ); /// TEMP

        let items = this.state.DATA.map(
            ( item, i ) => {
                return <Card data={ item } key={ i } showPage={ this.showPage.bind( this ) } />
            }
        );

        return (
            <div>
                <Page data={ this.state.selectedPage } isActive={ this.state.selectedPage !== null } />
                { items }
            </div>
        );
    } // /render()


    showPage( page ) {
        this.setState( { selectedPage: page } );
    }
} // /App