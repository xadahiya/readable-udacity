import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/index.css';

import App from './containers/App';
import PostPage from './containers/PostPage';
import NewOrEditPost from './containers/NewOrEditPost';
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
    <Route exact path="/new" component={NewOrEditPost} />
    <Route exact path="/" component={App} />
    <Route exact path="/:category/posts" component={App} />
    <Route exact path="/:category/posts/:id" component={PostPage} />
      <Route exact path="/:category/posts/:id/edit" component={NewOrEditPost} />
      </Switch>
    </Router>
  </Provider>
)

root.propTypes = {
  store: PropTypes.object.isRequired
}

ReactDOM.render(<Root store={store}/>, document.getElementById('root'));
registerServiceWorker();
