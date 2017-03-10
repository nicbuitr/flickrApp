import React, { Component } from 'react';
import Photo from './Photo.js';
import axios from 'axios';

class PhotoSearch extends Component {

    constructor(props){
      super(props);
      this.state = {
        query:"",
        colors:["red","orange", "yellow", "green", "blue","indigo", "violet" ],
        photos:[],
      };
    }
    

    searchPhotos(e){
      e.preventDefault();
      var photoArray = [];
      var query = this.state.query;
      var that = this;

       axios.all([
          axios.get('/flickr/'+ query + " " + this.state.colors[0]),
          axios.get('/flickr/'+ query + " " + this.state.colors[1]),
          axios.get('/flickr/'+ query + " " + this.state.colors[2]),
          axios.get('/flickr/'+ query + " " + this.state.colors[3]),
          axios.get('/flickr/'+ query + " " + this.state.colors[4]),
          axios.get('/flickr/'+ query + " " + this.state.colors[5]),
          axios.get('/flickr/'+ query + " " + this.state.colors[6])
        ])
       .then(axios.spread(function (red, orange, yellow, green, blue, indigo, violet){
           
           photoArray = photoArray.concat(red.data.photos.photo.splice(0,3));
           photoArray = photoArray.concat(orange.data.photos.photo.splice(0,3));
           photoArray = photoArray.concat(yellow.data.photos.photo.splice(0,3));
           photoArray = photoArray.concat(green.data.photos.photo.splice(0,3));
           photoArray = photoArray.concat(blue.data.photos.photo.splice(0,3));
           photoArray = photoArray.concat(indigo.data.photos.photo.splice(0,3));
           photoArray = photoArray.concat(violet.data.photos.photo.splice(0,3));

           console.log(photoArray);
            that.setState({
               photos: photoArray
            });

        }))

      console.log(this);

   }

    handleInputChange(e){
      e.preventDefault();
      this.setState({query: e.target.value});
    }

    render(){
      var row1 = [];
      var row2 = [];
      var row3 = [];
      var photos = this.state.photos;
      for (var i = 0; i < photos.length; i++) {
        if(i%3 === 0){
            row1.push(
              <div className="columns col-xs-2">
                <Photo photo={photos[i]} key={"photo_"+i} />
                <hr/>
              </div>
              );
          }
          else if(i%3===1){
            row2.push(
              <div className="columns col-xs-2">
                <Photo photo={photos[i]} key={"photo_"+i} />
                <hr/>
              </div>
              );
          }
          else{
            row3.push(
              <div className="columns col-xs-2">
                <Photo photo={photos[i]} key={"photo_"+i} />
                <hr/>
              </div>
              );
          }
        }           
        return(
          <div className="row">
            <div className="text-center">
              <h2>Search Flickr Photos</h2>
              <hr/>
            </div>
            <form className="form" onSubmit={this.searchPhotos.bind(this)}>             
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
                {row1}
                {row2}
                {row3}
              </div>
          </div>
        )
    }
}

export default PhotoSearch;