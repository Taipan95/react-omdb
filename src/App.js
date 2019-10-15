import React, { Component } from "react";
import Search from "./Components/Search";
import MoviesList from "./Components/MoviesList";
import './Styles/App.css'

class App extends Component {
    state = {
        results: []
    };
    addNewResult = resultData => {
        this.setState(prevState => ({
            results: resultData
        }));
    };
    render() {
        return (
            <div>
                <div className="header">OMDB Search</div>
                <Search onSubmit={this.addNewResult} />
                <MoviesList searchResults={this.state.results} />
            </div>
        );
    }
}
export default App;
