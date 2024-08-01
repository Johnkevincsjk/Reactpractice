import React from 'react'
import '../Banner/Banner.css'

export default function Banner() {
    return (
        <div className='container-fluid banner-main'>
            <div className='row banner-main2'>
                <div className='col nav-sub'>
                    <ul className='marvel-list'>
                        <li>NEWS</li>
                        <li>COMICS</li>
                        <li>CHARACTERS</li>
                        <li>MOVIES</li>
                        <li>TV SHOWS</li>
                        <li>GAMES</li>
                        <li>VIDEOS</li>
                        <li>MORE</li>
                    </ul>
                </div>
                <div className='col banner-header'>
                    <h6>STREAM X-MEN '97 EXCLUSIVELY ON </h6>
                    <img id='dis-icon' src="/photos/disneyplus.png" alt="" />
                </div>
            </div>
            <div className='col banner'>
                <h1 className='banner-content'>MOVIES</h1>
                <h5 className='banner-content2'>Journey into the cosmic depths of the mighty Marvel Cinematic Universe!</h5>

            </div>
            <div className='banner-heading'>
                <h1>HOT NEWS!</h1>
            </div>
            <div className='col banner banner2'>
                <h1 className='banner-content banner-content-2'>deadpool and wolverine</h1>
                <p className='banner-content-3'>Deadpool & Wolverine Box Office collections: Ryan Reynolds-Hugh Jackman smashes milestones globally including India
                </p>

            </div>


        </div>
    )
}
