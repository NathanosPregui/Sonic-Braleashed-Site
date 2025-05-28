/** @format */

import React from "react";
import tailsImage2 from "../assets/TailsFrontiers2.png";
import { useEffect } from "react";

const Downloads = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className='downloads__container' target='_blank'>
        <h1 className='downloads__title'>Downloads</h1>

        <a href='https://gamebanana.com/wips/92406'>
          <div className='downloads__download-btn'>
            <h1>Download do Mod</h1>
          </div>
        </a>
        <a href='https://gamebanana.com/tools/6311' target='_blank'>
          <div className='downloads__download-btn'>
            <h1>HedgeModManager</h1>
          </div>
        </a>
        <div className='downloads__imagetails'>
          <img src={tailsImage2} alt='' />
        </div>
      </div>
      <h2 style={{ color: "white" }}>
        Colocar nessa página: <br />
        Manual de como baixar o mod
      </h2>
    </>
  );
};

export default Downloads;
