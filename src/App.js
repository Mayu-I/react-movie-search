import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(fab, fas, far);

class App extends Component {
  render() {
    return (
      <div className="App">

        <table className="titleBar">
          <tbody>
            <tr>
              <td width="50">
                <FontAwesomeIcon className="titleIcon" icon={['fa', 'film']} />
              </td>
              <td width="8" />
              <td>
                <h1>Movies Search</h1>
              </td>
            </tr>
          </tbody>
        </table>

      </div>
    );
  }
}

export default App;
