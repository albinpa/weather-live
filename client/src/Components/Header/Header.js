import React from 'react'
import './Header.css'


const handleLogout = () => {
    localStorage.removeItem("token")
    window.location.reload()
}

function Header() {
    return (
        <div className="headerParentDiv">
            <div className="headerChildDiv">
                <div className="brandName">
                    <button className='green_btn'>Weather-Live</button>
                </div>

                <button className='green_btn' onClick={handleLogout}>Logout</button>
            </div>
        </div>
    )
}

export default Header;