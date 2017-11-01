import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Categories from '../components/Categories';
import Posts from '../components/Posts';
import {connect} from 'react-redux';
import * as PostsActions from '../actions/Posts';


class App extends Component {

  componentWillMount() {

    const {getAll} = this.props;

    if (! this.props.match.params.category){
      getAll()
    }
  }

  render() {
    return (
      <div className="container-fluid">
      <Navbar/>
      <Categories/>
      <Posts  category={this.props.match.params.category}/>
       </div>
     );
  }
}

function mapStateToProps(state) {

  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAll: () => dispatch(PostsActions.getAll())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
