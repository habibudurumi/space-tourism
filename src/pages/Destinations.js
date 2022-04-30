/** @format */

import { useState } from "react";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import Data from "../data.json";

const title = `pick your destination`;
const number = "01";

const Destinations = () => {
  const [value, setValue] = useState(0);

  const data = Data.destinations;

  const { name, images, description, distance, travel } = data[value];
  return (
    <div className='destination-container'>
      <Navbar />
      <Title title={title} number={number} />
      <div className='sm:py-10 lg:py-6 mx-auto lg:flex'>
        <img src={images.webp} alt={name} className='destination-image' />

        <div className='sm:text-center lg:text-left mx-auto'>
          <ul className='destination-ul '>
            {data.map((item, index) => {
              const { name, id } = item;
              return (
                <li
                  key={id}
                  onClick={() => setValue(index)}
                  className={`destination-li ${
                    value === index ? "border-b-light-blue" : "border-b-none"
                  }`}>
                  {name}
                </li>
              );
            })}
          </ul>
          <h2 className='destination-h2'>{name}</h2>
          <p className='paragraph'>{description}</p>
          <div className='horizontal-lin' />
          <div className=' flex sm:flex-col md:flex-row md:justify-evenly lg:justify-start '>
            <div>
              <h5 className='destination-h5'>avg. distance</h5>
              <p className='destination-para'>{distance}</p>
            </div>
            <div className='sm:mt-8 md:mt-0 lg:ml-[5rem] sm:ml-0 md:ml-0'>
              <h5 className='destination-h5'>est. time travel</h5>
              <p className='destination-para'>{travel}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
