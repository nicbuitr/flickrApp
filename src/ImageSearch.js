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
    render:function(){
      var rows = [];
      for (var i = 0; i < criterias.length; i++) {
        rows.push(
            <div className="form-group" key={"criteria_form_group_"+(i+1)}>
              <div className="row" key={"criteria_row_"+(i+1)}>
                <div className="col-md-11" key={"criteria_label_"+(i+1)}>
                  <label className="control-label" key={"criteria_control_label_"+(i+1)} htmlFor={"criteria_"+(i+1)}>{criterias[i].description}</label>
                </div>
                <div className="col-md-1 text-right" key={"criteria_text_right_"+(i+1)}> 
                  <input type="checkbox" className="criteria-checkbox" key={"criteria_checkbox"+(i+1)} id={"criteria_"+(i+1)} name={"criteria_"+(i+1)} value={criterias[i].selection} onChange={this.handleInputChange} />
                </div>
              </div>
            </div>
          );
      }
        return(
          <div className="jumbotron">
            <div className="row text-center">
              <h2>Search Flickr Images</h2>
              <hr/>
            </div>
            <form className="form" onSubmit={this.searchImage}>             
              <div className="form-group">
                <label className="control-label" htmlFor="query">Search images of: </label>
                <input className="form-control" type="text" id="query" name="query" value={this.state.query} placeholder="Insert a search term"></textarea>                    
              </div>
              <div className="form-group text-center">
                <button className="btn-lg" type="submit"  id="reviews-div">Search Image</button>
              </div>
            </form>
          </div>
        )
    }
})