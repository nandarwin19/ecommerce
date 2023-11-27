import React, { useState } from 'react';
import './ToggleBtn.css';
import { Link } from 'react-router-dom';

const ToggleBtn = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menu, setMenu] = useState("shop");

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="toggle-btn">
      <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      {menuOpen && (
        <ul className="menu">
          <li onClick={() => { setMenu("shops"); closeMenu(); }}>
            <Link style={{ textDecoration: 'none' }} to='/'>
              SHOP
            </Link>
            {menu === "shop" ? <hr /> : <></>}
          </li>
          <li onClick={() => { setMenu("mens"); closeMenu(); }}>
            <Link style={{ textDecoration: 'none' }} to='/mens'>
              MEN
            </Link>
            {menu === "mens" ? <hr /> : <></>}
          </li>
          <li onClick={() => { setMenu("womens"); closeMenu(); }}>
            <Link style={{ textDecoration: 'none' }} to='/womens'>
              WOMEN
            </Link>
            {menu === "womens" ? <hr /> : <></>}
          </li>
          <li onClick={() => { setMenu("collections"); closeMenu(); }}>
            <Link style={{ textDecoration: 'none' }} to='/collections'>
              KIDS
            </Link>
            {menu === "collections" ? <hr /> : <></>}
          </li>
          <Link to='/login' onClick={closeMenu}>
            <button>Login</button>
          </Link>
        </ul>
      )}
    </div>
  );
};

export default ToggleBtn;
