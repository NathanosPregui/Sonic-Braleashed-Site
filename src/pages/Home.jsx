/** @format */

import React, { useEffect } from "react";
import Logosite2 from "../assets/logo/Logo2.png";
import SonicImage from "../assets/latest5445.png";
import SonicImage2 from "../assets/Soniccorrendo.png";
import werehogImage from "../assets/WereHog.png";
import werehogImage2 from "../assets/Werehogcorrendo.png";
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
            id='videoIframe'
            src='https://www.youtube.com/embed/lgXxz4C-Kuo?si=-bB824eey5KIMsOe'
            title='Trailer'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;'
            allowFullScreen
          ></iframe>
        </div>
        <Link to='/Downloads'>
          <div className='home__download-btn'>
            <h1>DOWNLOAD</h1>
          </div>
        </Link>

        <div className='home__characters'>
          <img
            src={SonicImage}
            className='home__characters-pc'
            alt='Imagem do Sonic'
          />
          <img
            src={SonicImage2}
            className='home__characters-mobile'
            alt='Imagem do Sonic'
          />
          <img
            src={werehogImage}
            className='home__characters-pc'
            alt='Imagem do Sonic Werehog'
          />
          <img
            src={werehogImage2}
            className='home__characters-mobile'
            alt='Imagem do Sonic Werehog'
          />
        </div>
      </div>
    </>
  );
};

export default Home;
