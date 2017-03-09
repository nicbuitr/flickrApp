var React = require("react");
var query = "";


module.exports = React.createClass({
    searchImage:function(e){
      fetch('/flickr/' + query)
      .then(function(response) {
        if(response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(function(data) {
        console.log("Gotit!");
        callback(data.photos);
      })
      .catch(function(error) {
        console.log('There has been a problem with your fetch operation: ' + error.message);
      });
    },
    getUrl:function() {
        return "https://farm"+
            this.props.photo.farm +
            ".staticflickr.com/" +
            this.props.photo.server +
            "/"+
            this.props.photo.id+
            "_" +
            this.props.photo.secret +
            "_s.jpg";
    },
    render:function(){
        return(
          <div className="jumbotron">
            <div className="row text-center">
              <h2>Search Flickr Images</h2>
              <hr/>
            </div>
            <form className="form" onSubmit={this.searchImage}>             
              <div className="form-group">
                <label className="control-label" htmlFor="query">Search images of: </label>
                <input className="form-control" type="text" id="query" name="query" value={this.state.query} placeholder="Insert a search term"></input>                    
              </div>
              <div className="form-group text-center">
                <button className="btn-lg" type="submit"  id="reviews-div">Search Image</button>
              </div>
            </form>
          </div>
        )
    }
})