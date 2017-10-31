import React, { Component } from 'react';
import './styles/App.css';
import { connect } from 'react-redux';
import * as Category from '../actions/Category';
class App extends Component {
  render() {
    this.props.getCategories()
    console.log(this.props)
    return (
      <div className="App">
        Hello world!
      </div>
    );
  }
}

function mapStateToProps () {

  return {
    calendar: "Hello world!"
    }
  }


const mapDispatchToProps = (dispatch) => {
  return {
    // getCategories: () => dispatch(Category.getCategories())
    getCategories: () => dispatch(Category.getAllForCategory('react'))
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(App);
