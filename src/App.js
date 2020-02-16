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
    // console.log("This is my initializer")

    // const movies = [
    //   { id: 0, poster_src: "https://image.tmdb.org/t/p/w185_and_h278_bestv2/eBzf9d09Vgq2HSVC4fIZm1QNQd.jpg", title: "Charlie's Angels", overview: "Three women, detectives with a mysterious boss, retrieve stolen voice-ID software, using martial arts, tech skills, and sex appeal." },
    //   { id: 1, poster_src: "https://image.tmdb.org/t/p/w185_and_h278_bestv2/n4cdJ0Wqxb7C0HmZbcaC4eYnkIf.jpg", title: "Charlie's Angels: Full Throttle", overview: "The Angels are charged with finding a pair of missing rings that are encoded with the personal information of members of the Witness Protection Program. As informants are killed, the ladies target a rogue agent…" },
    // ]

    // let movieRows = []
    // movies.forEach((movie) => {
    //   console.log(movie.title)
    //   const movieRow = <MovieRow movie={movie} />
    //   movieRows.push(movieRow)
    // })

    // this.state = { rows: movieRows }

    this.performSearch()
  }

  performSearch(searchTerm) {
    console.log("Perform search using moviedb")
    const urlString = "https://api.themoviedb.org/3/search/movie?query=woman&api_key=6f1565dd9313119082ccef3c7286377d";
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
          placeholder="Enter Search Term" />

        {this.state.rows}

      </div >


    );
  }
}

export default App;
