import React, { useState } from 'react'

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

        <div className="navbar">
  <a href="/">Home</a>
  <div className="dropdown">
    <button className="dropbtn">Portfolio 
      <i className="fa fa-caret-down"></i>
    </button>
    <div className="dropdown-content">
      <a href="/landscape">Landscape</a>
      <a href="/street">Street</a>
      <a href="/miscellaneous">Miscellaneous</a>
      <a href="/Teddy">Teddy</a>
    </div>
  </div> 
  <a href="/about">About</a>
  <a href="/contact">Contact</a>
</div>
    );
};

export default Header