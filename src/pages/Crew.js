/** @format */

import { useState } from "react";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import Data from "../data.json";

const title = `meet your crew`;
const number = "02";

const Crew = () => {
  const [value, setValue] = useState(0);

  const data = Data.crew;
  const { name, images, role, bio } = data[value];

  return (
    <div className='crew-container'>
      <Navbar />
      <Title number={number} title={title} />

      <div className='crew-info'>
        <div>
          <img src={images.png} alt={name} className='crew-img' />
          <div className='horizontal-lin my-0 lg:hidden md:hidden' />
        </div>
        <div className='crew-desc'>
          <div>
            <ul className='destination-ul '>
              {data.map((item, index) => {
                const { id } = item;
                return (
                  <li
                    key={id}
                    onClick={() => setValue(index)}
                    className={`crew-li ${
                      value === index
                        ? "bg-white bg-opacity-100"
                        : "bg-light-blue"
                    }`}></li>
                );
              })}
            </ul>
          </div>
          <div>
            <h3 className='crew-h3'>{role}</h3>
            <h2 className='crew-h2'>{name}</h2>
            <p className='paragraph'>{bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crew;
