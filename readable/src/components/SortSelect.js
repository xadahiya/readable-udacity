import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as PostActions from '../actions/Posts';

class SortSelect extends Component{

  handleChange = (e) => {
    this.props.sortBy(e.target.value)
  }

  render(){
    return (
      <div className="sort-select-container">
      <span className="header">Sort By:</span>
      <select className="sort-select form-control" id="sort-by" name="sort-by" onChange={this.handleChange} >
      <option value="voteScore">Vote Score</option>
      <option value="timestamp">Timestamp</option>
      </select>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {}
}
const mapDispatchToProps = (dispatch) => {
  return {
    sortBy: (prop) => dispatch(PostActions.sortBy(prop))
  }
}




export default connect(mapStateToProps, mapDispatchToProps)(SortSelect)
