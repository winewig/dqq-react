import React, { useState } from 'react';

import './header.css';
import logo from './assets/favicon-32x32.png';

const Header = () => {

  const [menuIsOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuIsOpen);
  };

  const getHeaderMenuIconLinesClass = (lineNumber) => {    
    let menuOpenClass = menuIsOpen ? ` ${lineNumber}` : '';
    return 'header-icon-menu-line ' + menuOpenClass;
  }

  return (
    <div className='header'>
      <div className='header-container'>
        <div className='header-logo-and-title'>
          <img src={logo} alt='logo' />
          <div className='header-title-container'>
            <span>DQQ Family</span>
          </div>
        </div>
        {/* only for window width smaller than 420px */}
        <div className='header-icon' onClick={toggleMenu}>
          <div className={getHeaderMenuIconLinesClass('header-icon-menu-first-line')}></div>
          <div className={getHeaderMenuIconLinesClass('header-icon-menu-second-line')}></div>
          <div className={getHeaderMenuIconLinesClass('header-icon-menu-third-line')}></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
