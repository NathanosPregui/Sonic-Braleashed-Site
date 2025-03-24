/** @format */

import React from "react";
import Logosite2 from "../assets/logo/Logo2.png";
import SonicImage from "../assets/latest5445.png";
import werehogImage from "../assets/WereHog.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className='home__container'>
        <div className='home__logo'>
          <img src={Logosite2} alt='Logo' />
        </div>
        <div className='home__video'>
          <h2>TRAILER</h2>
          <iframe
            width='560'
            height='315'
            src='https://www.youtube.com/embed/lgXxz4C-Kuo?si=-bB824eey5KIMsOe'
            title='Trailer'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;'
            referrerpolicy='strict-origin-when-cross-origin'
            allowfullscreen
          ></iframe>
        </div>
        <Link to='/Downloads'>
          <div className='home__download-btn'>
            <h1>DOWNLOAD</h1>
          </div>
        </Link>

        <div className='home__characters'>
          <img src={SonicImage} alt='Imagem do Sonic' />
          <img src={werehogImage} alt='Imagem do Sonic Werehog' />
        </div>
      </div>
    </>
  );
};

export default Home;
