import React, { Component } from 'react'
import "./FooterCss.css"

export default class Footer extends Component{
    render(){
        return(
            <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="qr-section">
                        <img src="https://cdn.sanity.io/images/czqk28jt/prod_bk_us/da421b826216c29608a2694126a5095f17be8676-630x622.png?w=900&q=80&fit=max&auto=format" alt="QR Code" className="qr-image" />
                    </div>
                    <div className="offer-section">
                        <h2>Save $$$<br />With offers on demand</h2>
                        <div className="app-links">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Apple_logo_black.svg/64px-Apple_logo_black.svg.png" alt="App Store" className="app-icon" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Google_Play_Arrow_logo.svg/64px-Google_Play_Arrow_logo.svg.png" alt="Google Play" className="app-icon" />
                        </div>
                        <p className="disclaimer">Apple and the Apple logo are trademarks of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc. Google Play is a trademark of Google Inc. Terms apply.</p>
                    </div>
                </div>
                <div className="footer-links">
                    <p>TM & Copyright 2024 Burger King Company LLC. All Rights Reserved. | <a href="#">Do Not Sell Or Share My Personal Information</a></p>
                </div>
                <div className="navigation">
                    <div className="nav-item">
                        <span>Home</span>
                    </div>
                    <div className="nav-item">
                        <span>Menu</span>
                    </div>
                    <div className="nav-item">
                        <span>Rewards</span>
                    </div>
                    <div className="nav-item">
                        <span>Offers</span>
                    </div>
                </div>
            </div>
        </footer>
        )
    }
}