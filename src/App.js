import React, { Component } from 'react';
import PhotoSearch from './PhotoSearch.js';


class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        photos:[]
      };
    }

  render() {
    return (
      <div className="container">
        <div className="jumbotron">
            <div className="container">
              <PhotoSearch photos={this.state.photos} />
            </div>              
        </div>
      </div>
    );
  }
}

export default App;
