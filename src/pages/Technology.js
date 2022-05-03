/** @format */

import Navbar from "../components/Navbar";
import Data from "../data.json";
import Title from "../components/Title";
import { useState } from "react";

const title = `space launch 101`;
const number = "03";

const Technology = () => {
  const [value, setValue] = useState(0);
  const data = Data.technology;

  const { name, images, description } = data[value];
  return (
    <div className='technology-container'>
      <Navbar />
      <div className='mx-auto xl:max-w-[1440px] relative'>
        <Title number={number} title={title} />
        <img
          src={images.landscape}
          alt={name}
          className='mt-8 lg:hidden w-full'
        />

        <div className='technology-info'>
          <ul className='technology-ul '>
            {data.map((item, index) => {
              const { id } = item;
              return (
                <li
                  key={id}
                  onClick={() => setValue(index)}
                  className={` technology-li ${
                    value === index
                      ? "bg-light-blue text-dark-blue "
                      : "border-b-none"
                  }`}>
                  <h3 className='font-bellefair sm:text-base md:text-2xl '>
                    {index + 1}
                  </h3>
                </li>
              );
            })}
          </ul>
          <div>
            <h5 className='technology-h5'>the terminology...</h5>
            <h3 className='technology-h3'>{name}</h3>
            <p className='paragraph mt-4 sm:text-center lg:text-left'>
              {description}
            </p>
          </div>
        </div>
        <div>
          <img src={images.portrait} alt={name} className='technology-img' />
        </div>
      </div>
    </div>
  );
};

export default Technology;
