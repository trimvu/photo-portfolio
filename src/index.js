import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BaseLayout from './components/layout/BaseLayout';

import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Landscape from './components/portfolio/landscape/Landscape'
import Miscellaneous from './components/portfolio/miscellaneous/Miscellaneous'
import Street from './components/portfolio/street/Street'
import Teddy from './components/portfolio/Teddy/Teddy'
import Portfolio from './components/portfolio/Portfolio';
import DNE from './components/portfolio/DNE';
import Adventures from './components/portfolio/adventures/Adventures'
import Japan2019 from './components/portfolio/adventures/Japan2019/Japan2019'
import Europe2020 from './components/portfolio/adventures/Europe2020/Europe2020'
import WAOR2021 from './components/portfolio/adventures/WA-OR2021/WA-OR2021'
import CANV2021 from './components/portfolio/adventures/CA-NV2021/CA-NV2021'
import Asia2022 from './components/portfolio/adventures/Asia2022/Asia2022'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <BaseLayout>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/landscape' element={<Landscape />} />
          <Route path='/miscellaneous' element={<Miscellaneous />} />
          <Route path='/street' element={<Street />} />
          <Route path='/Teddy' element={<Teddy />} />
          <Route path='/adventures' element={<Adventures />} />
          <Route path='/Japan2019' element={<Japan2019 />} />
          <Route path='/Europe2020' element={<Europe2020 />} />
          <Route path='/WA-OR2021' element={<WAOR2021 />} />
          <Route path='/CA-NV2021' element={<CANV2021 />} />
          <Route path='/Asia2022' element={<Asia2022 />} />
          <Route path='*' element={<DNE />} />
        </Routes>
      </BaseLayout>
    </Router>
  </React.StrictMode>
);
