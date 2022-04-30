/** @format */

import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className='home-container '>
      <Navbar />
      <div className='info'>
        <div className='info-desc'>
          <h5 className='info-h5'>so, you want to travel to</h5>
          <h1 className='info-h1'>space</h1>
          <p className='info-p'>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className='explore'>
          <div className='explore-div'>
            <h3 className='sm:text-[20px] md:text-[32px]  uppercase font-bellefair'>
              explore
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
