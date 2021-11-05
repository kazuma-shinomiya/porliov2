require('./bootstrap');

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Posts from './containers/Posts';
import Login from './containers/Login';

const App = () => {
    return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Posts />}  />
            <Route exact path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    );
}

if (document.getElementById('app')) {
    ReactDOM.render(<App/>, document.getElementById('app'));
}
