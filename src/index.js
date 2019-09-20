import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { RoomProvider } from './components/Context/context';

import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
    <RoomProvider>
        <Router>
            <App />
        </Router>
    </RoomProvider>
, document.getElementById('root'));
