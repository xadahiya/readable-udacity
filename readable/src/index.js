import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import 'bootstrap/dist/css/bootstrap.css';

import App from './containers/App';
import PostForm from './components/PostForm';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducers/Main';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
)

const Root = ({store}) => (
  <Provider store={store}>
    <Router>
    <Switch>
    <Route exact path="/new" component={PostForm} />
    <Route exact path="/" component={App} />
      <Route path="/:category/posts" component={App} />
      </Switch>
    </Router>
  </Provider>
)

root.propTypes = {
  store: PropTypes.object.isRequired
}

ReactDOM.render(<Root store={store}/>, document.getElementById('root'));
registerServiceWorker();
