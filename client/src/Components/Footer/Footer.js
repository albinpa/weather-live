import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className="footerParentDiv">
            <div className="content">
                <div>
                    <div className="heading">
                        <p>POPULAR LOCATIONS</p>
                    </div>
                    <div className="list">
                        <ul>
                            <li>kolkata</li>
                            <li>Mumbai</li>
                            <li>Chennai</li>
                            <li>Pune</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div className="heading">
                        <p>ABOUT US</p>
                    </div>
                    <div className="list">
                        <ul>

                            <li>Careers</li>
                            <li>Contact Us</li>

                        </ul>
                    </div>
                </div>
                <div>
                    <div className="heading">
                        <p>Weather-Live</p>
                    </div>
                    <div className="list">
                        <ul>
                            <li>Help</li>
                            <li>Sitemap</li>
                            <li>Legal & Privacy information</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer">
                <p>Whether-Live  in Anywhere. © 2022-2030 </p>
            </div>
        </div>
    )
}

export default Footer;