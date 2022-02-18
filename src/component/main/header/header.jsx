import React from 'react';

import './header.css';
import logo from './assets/favicon-32x32.png';

const Header = () => {
  return (
    <div className='header'>
      <div className='header-container'>
        <div className='header-logo-and-title'>
          <img src={logo} alt='logo' />
          <div className='header-title-container'>
            <span>DQQ Family</span>
          </div>
        </div>
        <div className='header-icon'>icon</div>
      </div>
    </div>
  );
};

export default Header;
