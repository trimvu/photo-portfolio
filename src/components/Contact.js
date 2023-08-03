import React from 'react'

import Teddy_pics from './portfolio/Teddy/Teddy.json'

import "./Contact.css"
import { Link } from 'react-router-dom'

const Contact = () => {
    return (
        <div>
            <div className='contact-pic'>
                <img className='con-pic-size' src={Teddy_pics[0].file} alt='Teddy'/>
                <div className='centered'>Contact</div>
            </div>
            <div className='contain-contact'>

                <div className='contact-form'>
                    <h1>Send me a message!</h1>
                    <form>
                        <label>Name: * <br />
                            <input type='text' required/>
                        </label> <br /><br />
                        <label>Subject: <br />
                            <input type='text' />
                        </label> <br /><br />
                        <label>E-mail Address: * <br />
                            <input type='email' required />
                        </label> <br /><br />
                        <label>Message: * <br />
                            <textarea rows="4" cols="50" name="comment" form="usrform" placeholder='Write your message here, please.' required></textarea>
                        </label> <br /><br />
                        <input type='submit' /> <br /><br />
                    </form>
                </div>

                <div className='contact-me'>
                    <h1>My info: </h1>
                    <h2>Location</h2>
                    <p>Atlanta, Georgia</p>
                    <h2>E-mail</h2>
                    <p><Link to='mailto: vutriminh@gmail.com' data-testid="email-button">vutriminh@gmail.com</Link></p>
                    <h2>Phone</h2>
                    <p><Link to='tel:484-365-3631' data-testid="phone-button">(484) 365-3631</Link></p>

                </div>

                <div className='contact-map'>
                    <iframe className='map-me' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106135.64495684193!2d-84.57601913827007!3d33.76741223310568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5045d6993098d%3A0x66fede2f990b630b!2sAtlanta%2C%20GA!5e0!3m2!1sen!2sus!4v1687562898640!5m2!1sen!2sus" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>                
                </div>
            </div>

        </div>
    )
}

export default Contact