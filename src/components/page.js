// --------------------------------------------------
// IMPORT MODULES
// --------------------------------------------------
import * as React from 'react';


// --------------------------------------------------
// DEFINE COMPONENT
// --------------------------------------------------
export default class Page extends React.Component {
    constructor( props ) {
        console.log( 'INSIDE `Page` CONSTRUCTOR' ); /// TEMP

        super( props );
    } // /constructor()


    render() {
        console.log( 'INSIDE `Page` `render()`' ); /// TEMP

        if ( !!this.props.isActive ) {
            return (
                <section className="page">
                    <h1>{ this.props.data.title || 'FALLBACK' }</h1>
                </section>
            );
        } else {
            return null;
        }
    } // /render()
}