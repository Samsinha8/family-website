import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import Client from './Client';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Client />, document.getElementById('root'));
registerServiceWorker();
