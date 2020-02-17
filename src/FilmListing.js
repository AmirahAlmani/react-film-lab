import React from 'react';
import TMDB from './TMDB';
export default class FilmListing extends React.Component {

    render() {

        const allItems = TMDB.films.map((film, index) =>
            <div className="test1">{film.title}</div>

            // <div className="test1">{film.release_date}</div>

        );
        return (
            <div className="film-list">
                <h1 className="section-title">FILMS</h1>
                <p>{allItems}</p>
            </div>



            // <TMDB TMDB={this.state.films} />
        );
    }

}
