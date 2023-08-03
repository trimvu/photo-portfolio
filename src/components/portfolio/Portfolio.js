import React from 'react'

import './Portfolio.css'

const Portfolio = () => {
    return (
        <div className='portfolio'>
            Portfolio

            <ul>
                <li><a href='/adventures'>Adventures</a></li> <br />
                <li><a href='/landscape'>Landscape</a></li> <br />
                <li><a href='/street'>Street</a></li> <br />
                <li><a href='/miscellaneous'>Miscellaneous</a></li> <br />
                <li><a href='/Teddy'>Teddy</a></li> <br />
            </ul>
        </div>
    )
}

export default Portfolio