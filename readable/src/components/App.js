import React, { Component } from 'react';
import './styles/App.css';
import * as Category from '../api/Category';

class App extends Component {
  render() {
    Category.getAll().then(data => console.log(data.categories))
    return (
      <div className="App">
        Hello world!
      </div>
    );
  }
}

export default App;
