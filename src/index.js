import React from 'react';
import ReactDOM from 'react-dom';
import styles from './styles';
import App from './components/App';

ReactDOM.render(
    <App styles={styles} />,
    document.getElementById('app')
);
