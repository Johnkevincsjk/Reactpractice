import React from 'react'
import '../Nav/Nav.css'
import { FaSearch } from "react-icons/fa"

export default function NavBar() {
    return (
        <div className='container-fluid nav-main'>
            <div className='login-btn'>
                <h5 id='login-btn1'>LOG IN</h5>
                <h5>JOIN</h5>
            </div>

            <header id='title'>M<span>ARVEL</span></header>
            <div className='sub-logo'>
                <img id='mulogo' src="/photos/iconmushield.png" />
                <div className='sub-logo2'>
                    <p>Marvel Unlimited</p>
                    <span>Subscribe</span>
                </div>
            </div>
            <div className='search-icon'>
                <FaSearch />
            </div>

        </div>
    )
}
