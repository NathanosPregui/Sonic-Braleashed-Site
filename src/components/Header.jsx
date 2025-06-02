/** @format */

import React from "react";
import logosite from "../assets/logo/Logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className='header'>
        <div className='header__logo'>
          <Link to='/'>
            <img src={logosite} alt='' />
          </Link>
        </div>
        <div className='header__buttons'>
          <Link to='/'>
            <p>INÍCIO</p>
          </Link>
          <Link to='/Downloads'>
            <p>DOWNLOAD</p>
          </Link>
          <Link to='/Sobre'>
            <p>SOBRE</p>
          </Link>
          <Link to='/'>
            <p>CRÉDITOS</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
