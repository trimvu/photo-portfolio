import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BaseLayout from './components/layout/BaseLayout';

import About from './components/About'
import Contact from './components/Contact'
import Landscape from './components/portfolio/Landscape'
import Miscellaneous from './components/portfolio/Miscellaneous'
import Street from './components/portfolio/Street'
import Teddy from './components/portfolio/Teddy'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <BaseLayout>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/landscape' element={<Landscape />} />
          <Route path='/miscellaneous' element={<Miscellaneous />} />
          <Route path='/street' element={<Street />} />
          <Route path='/Teddy' element={<Teddy />} />
        </Routes>
      </BaseLayout>
    </Router>
  </React.StrictMode>
);
