import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Categories from '../components/Categories';
import Posts from '../components/Posts';
import {connect} from 'react-redux';
import * as PostsActions from '../actions/Posts';
import { Link } from 'react-router-dom';


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
      <Link to="/new" className="btn btn-primary btn-lg btn-new-post">Add Post</Link>
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