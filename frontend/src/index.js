import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import { BrowserRouter as Router } from "react-router-dom";
import App from './App'
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.render(
    <Router>
        <GoogleOAuthProvider clientId="551413078357-sqtd7usj2d7mi4kj2vu8esp8h20mdjm2.apps.googleusercontent.com">
            <App/>
        </GoogleOAuthProvider>;
    </Router>

,document.getElementById('root'));