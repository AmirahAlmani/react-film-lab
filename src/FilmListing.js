import React from 'react';
import TMDB from './TMDB';
export default class FilmListing extends React.Component {

    render() {

        const allItems = TMDB.films.map((film, index) =>
            <div className="test1">{film.title}</div>
        );
        return (
            <div className="film-list">
                <h1 className="section-title">FILMS</h1>
                <div>{allItems}</div>
            </div>



            // <TMDB TMDB={this.state.films} />
        );
    }

}
