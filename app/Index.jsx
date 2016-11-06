import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Store from './stores/Index';
import Main from './components/Main';

ReactDOM.render(<Provider store={Store}><Main /></Provider>, document.getElementById('content'));
