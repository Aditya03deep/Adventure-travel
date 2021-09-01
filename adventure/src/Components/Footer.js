import { Button } from './Button'
import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    join the adventure newsletter to recieve our best vacation details
                </p>
                <p className="footer-subscription-text">
                    You can unsubscribe at any time
                </p>
                <div className="input-areas">
                    <form>
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            className="footer-input"
                        />
                        <Button buttonStyle="btn--outline">Subscribe</Button>
                    </form>

                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to="/sign-up">How it Works</Link>
                        <Link to="/">Testimonials</Link>
                        <Link to="/sign-up">Careers</Link>
                        <Link to="/sign-up">Investors</Link>
                        <Link to="/sign-up">Terms of Services</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Contact US</h2>
                        <Link to="/sign-up">How it Works</Link>
                        <Link to="/">Testimonials</Link>
                        <Link to="/sign-up">Careers</Link>
                        <Link to="/sign-up">Investors</Link>
                        <Link to="/sign-up">Terms of Services</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to="/sign-up">How it Works</Link>
                        <Link to="/">Testimonials</Link>
                        <Link to="/sign-up">Careers</Link>
                        <Link to="/sign-up">Investors</Link>
                        <Link to="/sign-up">Terms of Services</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Contact US</h2>
                        <Link to="/sign-up">How it Works</Link>
                        <Link to="/">Testimonials</Link>
                        <Link to="/sign-up">Careers</Link>
                        <Link to="/sign-up">Investors</Link>
                        <Link to="/sign-up">Terms of Services</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to="/" className="social-logo">
                            TRAVEL<i className="fab fa-typo3"/>
                        </Link>
                    </div>
                    <small className="website-right">TRAVEL  2021</small>
                    <div className="social-icons">
                        <Link className="social-icon-link facebook"
                        to='/'
                        target="_blank"
                        aria-label = "facebook"
                        >
                            <i className="fab fa-facebook-f"/>
                        </Link>
                        <Link className="social-icon-link instagram"
                        to='/'
                        target="_blank"
                        aria-label = "Instagram"
                        >
                            <i className="fab fa-instagram"/>
                        </Link>
                        <Link className="social-icon-link linkedin"
                        to='/'
                        target="_blank"
                        aria-label = "Linkedin"
                        >
                            <i className="fab fa-linkedin"/>
                        </Link>
                        <Link className="social-icon-link youtube"
                        to='/'
                        target="_blank"
                        aria-label = "Youtube"
                        >
                            <i className="fab fa-youtube"/>
                        </Link>
                        <Link className="social-icon-link twitter"
                        to='/'
                        target="_blank"
                        aria-label = "Twitter"
                        >
                            <i className="fab fa-twitter"/>
                        </Link>

                    </div>

                </div>

            </section>
        </div>
    )
}

export default Footer
