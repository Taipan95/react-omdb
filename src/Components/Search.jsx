import React from "react";
import axios from "axios";
import "../Styles/Search.css";

class Search extends React.Component {
    state = { movieTitle: "" };

    handleSubmit = async event => {
        event.preventDefault();
        const response = await axios.get(
            `https://www.omdbapi.com/?s=${this.state.movieTitle}&type=movie&apikey=961d9e85`
        );
        this.props.onSubmit(response.data.Search);
        this.setState({ movieTitle: "" });
        console.log(response.data.Search);
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    value={this.state.movieTitle}
                    onChange={event =>
                        this.setState({ movieTitle: event.target.value })
                    }
                    placeholder="Enter title you wish to Search."
                    required
                />
            </form>
        );
    }
}

export default Search;
