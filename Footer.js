import React from 'react'
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
        <section className='footer-susbcription'>
            <div className='footer-text'>
                <p> &copy; 2022 Aim Global Security Services Limited. </p>
                <p>All rights reserved.</p>
            </div>
        </section>
        <section className='social-media'>
            <div className='social-media-wrap'>
                <div className='social-icons'>
                    <a href='/' className='social-icon-link facebook' target='blank' aria-label='Facebook'>
                        <i className='fa fa-facebook'></i>
                    </a>
                    <a href='/' className='social-icon-link twitter' target='blank' aria-label='Twitter'>
                        <i className='fa fa-twitter'></i>
                    </a>
                    <a href='/' className='social-icon-link linkedin' target='blank' aria-label='Facebook'>
                        <i className='fa fa-linkedin'></i>
                    </a>
                </div>
            </div>        
        </section>
    </div>

  )
}

export default Footer