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
            <article className="card" onClick={ ( e ) => { this.selectPage(); } }>
                <div className="card__header">
                </div>
                <div className="card__body">
                    <h1>{ this.props.data.title || 'FALLBACK' }</h1>
                </div>
            </article>
        );
    } // /render()


    selectPage( page ) {
        console.log( 'INSIDE `select()`' ); /// TEMP
        console.log( 'INVOKING `this.props.showPage()`' ); /// TEMP

        this.props.showPage( this.props.data );
    }
} // /Card