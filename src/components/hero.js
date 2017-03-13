// --------------------------------------------------
// IMPORT MODULES
// --------------------------------------------------
import * as React from 'react';


// --------------------------------------------------
// DEFINE COMPONENT
// --------------------------------------------------
export default class Hero extends React.Component {
    constructor( props ) {
        super( props );
    } // /constructor()


    render() {
        console.log( 'INSIDE `Hero` `render()`' );
        console.log( this.props );

        return (
            <div className="hero">
                <img src={ this.props.data.url } alt={ this.props.data.alt } />
            </div>
        );
    } // /render()
}