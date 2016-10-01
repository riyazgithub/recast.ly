import React from 'react';
import ReactDOM from 'react-dom';
import searchYouTube from './lib/searchYouTube';
import App from './components/App';
import styles from '../styles/style.css';

ReactDOM.render(<App searchYouTube={searchYouTube} />, document.getElementById('app'));