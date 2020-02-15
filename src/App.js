import React, { Component } from 'react';
import './App.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(fab, fas, far);

class App extends Component {
  constructor(props) {
    super(props)
    console.log("This is my initializer")

    const movies = [
      { id: 0, title: "Charlie's Angels", overview: "Three women, detectives with a mysterious boss, retrieve stolen voice-ID software, using martial arts, tech skills, and sex appeal." },
      { id: 1, title: "Charlie's Angels: Full Throttle", overview: "The Angels are charged with finding a pair of missing rings that are encoded with the personal information of members of the Witness Protection Program. As informants are killed, the ladies target a rogue agent…" },
    ]

    this.state = {
      rows: [
        <p key="1">This is my row0</p>,
        <p key="2">This is my row1</p>,
        <p key="3">This is my row2</p>
      ]
    }

    let movieRows = []
    movies.forEach((movie) => {
      console.log(movie.title)
      const movieRow = <table>
        <tbody>
          <tr>
            <td>
              <img src="" alt="poster" />
            </td>
            <td>
              {movie.title}
            </td>
          </tr>
        </tbody>
      </table>
      movieRows.push(movieRow)
    })

    this.state = { movieRows: movieRows }
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
