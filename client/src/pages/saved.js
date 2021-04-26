  
import React, { Component } from "react";
import API from "../utils/API";
import Results from "../components/Result";

class Saved extends Component {
    state = {
         savedBooks: [],
    }

    componentDidMount() {
        API.savedBooks()
            .then( savedBooks => this.setState({  savedBooks:  savedBooks }))
            .catch(err => console.error(err));
    }

    render() {
        return (
            <div className="container">
                <h1>Collection Saved</h1>
                <Results books={this.state.savedBooks} />
            </div>
        )
    }
}

export default Saved;