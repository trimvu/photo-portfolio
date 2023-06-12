import React, { useState } from 'react'

import "./Header.css"

import portfolio from "./portfolio.json"

const Header = () => {
    const [value, setValue] = useState('');

    const handleChange = () => {

    }

    return (
        <div>

            <nav>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <select value={value} onChange={handleChange} className="dropdown">
                        <option value="">Portfolio</option>
                        <option value="Landscape">Landscape</option>
                        <option value="Street">Street</option>
                        <option value="Miscellaneous">Miscellaneous</option>
                        <option value="Teddy">Teddy </option>
                        </select>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
                    </li>

                </ul>
            </nav>
        </div>
    );
};

export default Header