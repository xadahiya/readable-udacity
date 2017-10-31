import React, { Component } from 'react';
import Categories from './Categories';
class App extends Component {
  render() {
    console.log(this.props)
    return ( <Categories/>   );
  }
}


// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App
