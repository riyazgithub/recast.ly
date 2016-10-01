import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import styles from '../styles/style.css';
import { Router, Route, hashHistory} from 'react-router';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/videos/:videoIndex" component={App} />
  </Router>
  ), document.getElementById('app'));