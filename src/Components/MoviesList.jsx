import React from "react";
import Movie from "./Movie";
import "../Styles/MoviesList.css";
class MoviesList extends React.Component {
    render() {
        return (
            <div className="resultsDiv">
                {this.props.searchResults.map(result => (
                    <Movie key={result.imdbID} {...result} />
                ))}
            </div>
        );
    }
}

export default MoviesList;
