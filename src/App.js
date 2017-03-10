import React, { Component } from 'react';
import PhotoSearch from './PhotoSearch.js';


class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron">
            <div className="container">
              <PhotoSearch />
            </div>              
        </div>
      </div>
    );
  }
}

export default App;
