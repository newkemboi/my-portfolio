import React from 'react'
import Button from '../Button'

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    We are learning in a self paced manner!
                </p>
                <p footer-subscription-text>
                    You can unsubscribe any time
                </p>
                <div className='input-areas'>
                    <form>
                        <input type='email' name="email" placeholder="Ypur Email"
                        className="footer-input"/>
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
                

            </section>
        </div>
    )
}

export default Footer
