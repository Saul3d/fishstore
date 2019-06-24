import React from 'react';
import './App.scss';
import Auth from '../components/Auth/Auth';
import Home from '../components/Home/Home';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Auth />
      <Home />
    </div>
  );
}

export default App;
