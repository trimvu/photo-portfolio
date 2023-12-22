import React from 'react'

import './Portfolio.css'

const Portfolio = () => {
    return (
        <div className='portfolio'>
            <h1>Portfolio</h1>

            <ul>
                <li>
                    <a href='/adventures'>
                        <img src='images/Japan2019/TRI_0266.jpg' alt='Japan' />
                        Adventures</a>
                </li> <br />
                <li>
                    <a href='/landscape'>
                        <img src='images/comingsoon.png' alt='Coming Soon' />
                        Landscape
                    </a>
                </li> <br />
                <li>
                    <a href='/street'>
                        <img src='images/comingsoon.png' alt='Coming Soon' />
                        Street
                    </a>
                </li> <br />
                <li>
                    <a href='/miscellaneous'>
                        <img src='images/comingsoon.png' alt='Coming Soon' />
                        Miscellaneous
                    </a>
                </li> <br />
                <li>
                    <a href='/Teddy'>
                        <img src='images/Teddy/TRI_6495.jpg' alt='Coming Soon' />
                        Teddy
                    </a>
                </li> <br />
            </ul>
            <br /><br /><br /><br /><br /><br /><br /><br />
        </div>
    )
}

export default Portfolio