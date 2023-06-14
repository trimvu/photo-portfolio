import React from 'react'

const Contact = () => {
    return (
        <div>
            Contact

            <form>
                <label>Name: * <br />
                    <input type='text' required/>
                </label> <br />
                <label>Subject: <br />
                    <input type='text' />
                </label> <br />
                <label>E-mail Address: * <br />
                    <input type='email' required />
                </label> <br />
                <label>Message: * <br />
                    <textarea rows="4" cols="50" name="comment" form="usrform" placeholder='Write your message here, please.' required></textarea>
                </label> <br />
                <input type='submit' />
            </form>

            <h2>Location</h2>
            <p>Atlanta, Georgia</p>
            <h2>E-mail</h2>
            <p>vutriminh@gmail.com</p>
            <h2>Phone</h2>
            <p>(484) 365 3631</p>
        </div>
    )
}

export default Contact