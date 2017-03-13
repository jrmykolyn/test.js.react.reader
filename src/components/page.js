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
                    <header className="page__header">
                        <div className="hero">
                            <img src={ this.props.data.featuredImage.url } alt={ this.props.data.featuredImage.alt } />
                        </div>
                    </header>
                    <div className="page__body">
                        <h1>{ this.props.data.title || 'FALLBACK' }</h1>
                    </div>
                    <footer className="page__footer">
                    </footer>
                </section>
            );
        } else {
            return null;
        }
    } // /render()
}