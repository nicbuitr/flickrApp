import React, { Component } from 'react';

class Photo extends Component {

    getUrl() {
        return "https://farm"+
            this.props.photo.farm +
            ".staticflickr.com/" +
            this.props.photo.server +
            "/"+
            this.props.photo.id+
            "_" +
            this.props.photo.secret +
            "_s.jpg";
    }

    render(){
        return(
          <div className="row">
            <div className="row reviews text-center">
                  <img src={this.getUrl()} className="img-responsive" />
              </div>
          </div>
        );
    }
}

export default Photo;