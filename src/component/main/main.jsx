import React, { useState } from 'react';

import Header from './header/header';
import Navbar from './navbar/navbar';

const Main = () => {
  const [navbarIsOpen, setNavbarOpen] = useState(false);

  const setNavbarOpencallback = (value) => {
    setNavbarOpen(value);
  };

  return (
    <>
      <Header setNavbarStatus={setNavbarOpencallback} />
      {navbarIsOpen && <Navbar />}
    </>
  );
};

export default Main;
