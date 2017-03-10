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
                <div className="card__header">
                </div>
                <div className="card__body">
                    <h1>{ this.props.data.title || 'FALLBACK' }</h1>
                </div>
            </article>
        );
    } // /render()
} // /Card