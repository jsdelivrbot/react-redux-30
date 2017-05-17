import React , {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {fetchWeather} from './../actions/index';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state= {term:''};
    }
    handler = (e) => {
        this.setState({term:e.target.value});
    }
    submission = (e) => {
      e.preventDefault();
      this.props.fetchWeather(this.state.term);
    }

    render(){
        return (
          <form onSubmit={this.submission} className="input-group">
            <input
              className="form-control"
              onChange={this.handler}
              placeholder="Type your favourite city to know more about it..."
              value={this.state.term}/>
            <span className="input-group-btn">
              <button type="submit" className="btn btn-primary">Search</button>
            </span>
          </form>
        );
    }
};

function stateDispatch (dispatch) {
  return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null, stateDispatch)(SearchBar);
