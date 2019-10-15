import React from "react";
import "../Styles/Movie.css";

class Movie extends React.Component {
    render() {
        const movie = this.props;
        return (
            <div className="result">
                <img src={movie.Poster} alt="" />
                <h5>{movie.Title}</h5>
                <button>Read More</button>
            </div>
        );
    }
}

export default Movie;
