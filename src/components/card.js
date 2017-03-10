// --------------------------------------------------
// IMPORT MODULES
// --------------------------------------------------
import React from 'React';


// --------------------------------------------------
// DEFINE COMPONENT
// --------------------------------------------------
export default class Card extends React.Component {
    constructor( props ) {
        super( props );
    } // /constructor()


    render() {
        return (
            <article className="card">
                <h1>{ this.props.data.title || 'FALLBACK' }</h1>
            </article>
        );
    } // /render()
} // /Card