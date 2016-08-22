import React from 'react';
import ReactDOM from 'react-dom';
import Store from './stores/index';
import { Provider } from 'react-redux';
import Main from './components/Main.jsx';

ReactDOM.render(<Provider store={Store}><Main /></Provider>, document.getElementById('content'));
