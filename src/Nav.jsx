import React from 'react';
// import './NavCss.css';
import "./NavCss.css";

export default class NavBar extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <div className="menu-icon">
          <div className="bar" />
          <div className="bar" />
          <div className="bar" />
        </div>
        <span className="logo">BURGER KING</span>
        <div className="rightNav">
          <span className="user-icon">👤</span>
          <button className="cart-btn">View Cart</button>
        </div>
      </nav>
    );
  }
}

