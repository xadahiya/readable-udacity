import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import Category from './reducers/Category';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  Category,
  composeEnhancers(
    applyMiddleware(thunk)
  )
)

const Root = ({store}) => (
  <Provider store={store}>
    <Router>
      <Route path="/" component={App} />
    </Router>
  </Provider>
)

root.propTypes = {
  store: PropTypes.object.isRequired
}

ReactDOM.render(<Root store={store}/>, document.getElementById('root'));
registerServiceWorker();
