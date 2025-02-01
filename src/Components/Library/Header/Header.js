import React from 'react';
import { IoBook } from 'react-icons/io5';
import './Header.css';

const Header = () => {
  return (
    <header>
      <h2>
        <IoBook className="Icon" /> Library
      </h2>
    </header>
  );
};

export default Header;