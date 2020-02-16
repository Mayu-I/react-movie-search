import React, { Component } from 'react';
import './App.scss';
import MovieRow from './MovieRow.js';
import $ from 'jquery';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(fab, fas, far);

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}

    this.performSearch("17")
  }

  performSearch(searchTerm) {
    console.log("Perform search using moviedb")
    const urlString = "https://api.themoviedb.org/3/search/movie?api_key=6f1565dd9313119082ccef3c7286377d&query=" + searchTerm;
    $.ajax({
      url: urlString,
      success: (searchResults) => {
        console.log("Fetched data successfully")
        const results = searchResults.results

        var movieRows = []

        results.forEach((movie) => {
          movie.poster_src = "https://image.tmdb.org/t/p/w185/" + movie.poster_path
          const movieRow = <MovieRow key={movie.id} movie={movie} />
          movieRows.push(movieRow)
        })
        this.setState({ rows: movieRows })
      },
      error: (xhr, status, err) => {
        console.error("Failed to fetch data")
      }
    })
  }

  searchChangeHandler(event) {
    const boundObject = this
    const searchTerm = event.target.value
    boundObject.performSearch(searchTerm)
  }

  render() {
    return (
      <div className="App">
        <table className="titleBar"
          style={{
            backgroundColor: '#000',
            display: 'block',
            color: '#fff',
            paddingLeft: 16
          }}>
          <tbody>
            <tr>
              <td width="50">
                <FontAwesomeIcon
                  className="titleIcon"
                  icon={['fa', 'film']} />
              </td>
              <td width="8" />
              <td>
                <h1>Movie Search</h1>
              </td>
            </tr>
          </tbody>
        </table>

        <input
          style={{
            fontSize: 24,
            display: 'block',
            width: "97%",
            paddingTop: 8,
            paddingBottom: 8,
            paddingLeft: 16
          }}
          placeholder="Enter Search Term"
          onChange={this.searchChangeHandler.bind(this)} />

        {this.state.rows}

      </div >


    );
  }
}

export default App;
