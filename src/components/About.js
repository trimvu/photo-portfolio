import React from 'react'
import { Link } from 'react-router-dom'

import './About.css'

const About = () => {
    return (
        <div style={{ height: '100vh'}}>
            <br />
            <h1 style={{ textAlign: 'center'}}>Hi! I'm Tri!</h1>
            <div className='contain-about'>

                <div className='about-me'>
                    <h1>About Me</h1>

                    <p>
                        Welcome to my photography portfolio! I am a passionate hobbyist photographer who finds joy in capturing moments and preserving memories through the lens of my camera. Photography is not only a creative outlet for me but also a way to immerse myself in the beauty of the world around us.
                    </p>

                    <p>
                        My love for photography started several years ago, and since then, I have honed my skills while exploring various genres. I am particularly drawn to the enchanting allure of landscapes, the vibrant energy of street photography, and the captivating beauty of cityscapes. Through these genres, I aim to showcase the unique perspectives and hidden gems that can be found in both familiar and unfamiliar surroundings.
                    </p>

                    <p>
                        One of my greatest inspirations is my beloved pet dog, Teddy. He has become my faithful companion on countless photographic adventures, and capturing his playful spirit and irresistible charm has become one of my favorite subjects. Teddy's presence has taught me to embrace the spontaneity of life and find beauty in the simplest of moments.
                    </p>

                    <p>
                        As a hobbyist photographer, I approach each opportunity with a sense of curiosity and a desire to learn and grow. Photography allows me to pause time, observe the world with a keen eye, and immortalize fleeting moments that would otherwise go unnoticed. My goal is to create images that evoke emotions and transport viewers to the very essence of the scene.
                    </p>

                    <p>
                        Within this portfolio, you will find a collection of my favorite works. Each photograph represents a unique journey and a personal connection to the subjects and environments I have encountered. I invite you to explore the galleries dedicated to landscapes, street photography, cityscapes, and the adorable adventures of Teddy.
                    </p>

                    <p>
                        Thank you for taking the time to visit my portfolio. If you have any questions, comments, or if you would like to discuss a potential collaboration, please feel free to reach out and <Link to='/contact' data-testid="contact-button">contact me</Link>. Let's celebrate the art of photography together and capture moments that will be cherished for a lifetime.
                    </p>

                </div>
                <div className='me-pic'>
                    <img className='me' src='images/About/TRI_0517-2.jpg' alt='me' />
                </div>
                <br /><br /><br /><br /><br /><br /><br />
            </div>
        </div>
    )
}

export default About