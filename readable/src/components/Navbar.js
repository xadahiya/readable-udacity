import {Navbar} from 'react-bootstrap';
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import * as PostsActions from '../actions/Posts';

class NavbarInstance extends Component {
  render() {
    return (
      <Navbar className="">
        <Navbar.Header>
          <Navbar.Brand >
            <Link to="/">
              <h2 className="text-center" onClick={() => this.props.getAll()}>Readable Udacity</h2>
            </Link>
          </Navbar.Brand>
        </Navbar.Header>
      </Navbar>
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

export default connect(mapStateToProps, mapDispatchToProps)(NavbarInstance);
