import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import "./Header.css"

import portfolio from "./portfolio.json"

const Header = () => {
    const [value, setValue] = useState('');

    const handleChange = () => {

    }

    return (
        // <div>

        //     <nav>
        //         <ul>
        //             <li>
        //                 <a href="/">Home</a>
        //             </li>
        //             {/* <li>
        //                 <select value={value} onChange={handleChange} className="dropdown">
        //                 <option value="">Portfolio</option>
        //                 <option value="Landscape">Landscape</option>
        //                 <option value="Street">Street</option>
        //                 <option value="Miscellaneous">Miscellaneous</option>
        //                 <option value="Teddy">Teddy </option>
        //                 </select>
        //             </li> */}
        //             <li>
        //                 <a href="/about">About</a>
        //             </li>
        //             <li>
        //                 <a href="/contact">Contact</a>
        //             </li>
        //             {portfolio.portfolio.map(info => {
        //                 return(
        //                     <li>
        //                         <a href={info.lowercase}>
        //                             {info.name}
        //                         </a>
        //                     </li>
        //                 )
        //             })}
        //         </ul>
        //     </nav>
        // </div>

<nav>
  <div className='topnav'>
    <ul className="main-nav">
      <li><Link to="/home" className='linky'>Home</Link></li>
      <li className="dropdown">
        <Link to="/portfolio" className='linky'>Portfolio</Link>
        <ul className="sub-nav">
          <li className="dropdown">
            <Link to="/adventures" className='adventures linky'>Adventures</Link>
            <ul className="sub-sub-nav">
              <li><Link to="/Japan2019" className='linky'>Japan 2019</Link></li>
              <li><Link to="/Europe2020" className='linky'>Europe 2020</Link></li>
              <li><Link to="/WA-OR2021" className='linky'>Washington - Oregon 2021</Link></li>
              <li><Link to="/CA-NV2021" className='linky'>California - Nevada 2021</Link></li>
              <li><Link to="/Asia2022" className='linky'>Asia 2022</Link></li>

            </ul>
          </li>
          <li><Link to="/landscape" className='linky'>Landscape</Link></li>
          <li><Link to="/street" className='linky'>Street</Link></li>
          <li><Link to="/miscellaneous" className='linky'>Miscellaneous</Link></li>
          <li><Link to="/Teddy" className='linky'>Teddy</Link></li>

        </ul>
      </li>
      <li><Link to="/about" className='linky'>About</Link></li>
      <li><Link to="/contact" className='linky'>Contact</Link></li>

    </ul>

  </div>
</nav>
    );
};

export default Header