import React, { Component } from 'react';
import Photo from './Photo.js';

class PhotoSearch extends Component {

    constructor(props){
      super(props);
      this.state = {
        query:"",
        photos:[]
      };
    }
    

    searchPhoto(e){
      e.preventDefault();

      var photos = fetch('/flickr/' + this.state.query)
      .then(function(response) {
          console.log(response);
          console.log(response.json());
          return response.json();     
      })
      .then(function(promise, callback) {
        console.log("Gotit!");
        console.log(promise);
        console.log(promise.photos);
        console.log(promise.photos.photo);
        callback(promise.photos.photo);
      })
      .catch(function(error) {
        console.log('There has been a problem with your fetch operation: ' + error.message);
      });

      console.log(this);
      this.setState({photos:photos});

    }

    handleInputChange(e){
      e.preventDefault();
      var state = this.state;
      state.query = e.target.value;
      this.setState(state);
    }

    render(){
        return(
          <div className="row">
            <div className="text-center">
              <h2>Search Flickr Photos</h2>
              <hr/>
            </div>
            <form className="form" onSubmit={this.searchPhoto.bind(this)}>             
              <div className="form-group">
                <label className="control-label" htmlFor="query">Search photos of: </label>
                <input className="form-control" type="text" id="query" name="query" value={this.state.query} onChange={this.handleInputChange.bind(this)} placeholder="Insert a search term"></input>                    
              </div>
              <div className="form-group text-center">
                <button className="btn-lg" type="submit"  id="reviews-div">Search Photo</button>
                <hr/>
              </div>
            </form>
            <div className="row reviews text-center">
                {
                  this.props.photos.map(function(photo,index){
                      return(
                          <Photo photo={photo} key={"photo_"+index} />
                      )         
                  })
                }
              </div>
          </div>
        )
    }
}

export default PhotoSearch;