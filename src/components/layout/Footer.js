import React from 'react'

import './Footer.css'

import { FaGithub, FaLinkedin, FaFingerprint } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer>
            <div className='footer'>
                &copy; 2019 - 2023 Tri Vu
                <br />
                <br />
                <a href='https://github.com/trimvu' target='_blank' rel='noreferrer'><FaGithub className='icons' size={25} /></a>

                <a href='https://www.linkedin.com/in/tri-minh-vu/' target='_blank' rel='noreferrer'><FaLinkedin className="icons" size={25} /></a>

                <a href='https://tri-vu-dev.netlify.app' target='_blank' rel='noreferrer'><FaFingerprint className='icons' size={25} /></a>

            </div>

        </footer>
    )
}

export default Footer