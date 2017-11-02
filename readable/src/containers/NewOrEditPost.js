import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import PostForm from '../components/PostForm';
import {connect} from 'react-redux';


class NewOrEditPost extends Component {

  componentWillMount() {  }

  render() {
    return (
      <div className="container-fluid">
      <Navbar/>
      <PostForm post_id={this.props.match.params.id}/>
       </div>
     );
  }
}

function mapStateToProps(state) {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewOrEditPost);
