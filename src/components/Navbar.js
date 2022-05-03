/** @format */
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "../shared/logo.svg";
import MenuBtn from "../shared/icon-hamburger.svg";
import CloseBtn from "../shared/icon-close.svg";
import Sidebar from "./Sidebar";

const links = [
  { id: 1, text: "home", url: "/", number: "00" },
  { id: 2, text: "destinations", url: "/destinations", number: "01" },
  { id: 3, text: "crew", url: "/crew", number: "02" },
  { id: 4, text: "technology", url: "/technology", number: "03" },
];

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const activeLink = ({ isActive }) => {
    return {
      borderBottom: isActive ? "2px solid white" : "none",
    };
  };

  return (
    <nav className='font-condensed  uppercase flex justify-between  items-center pt-6 max-w-[1440px] mx-auto '>
      <Link to='/'>
        <img src={Logo} alt='logo' className='logo' />
      </Link>
      {sidebar ? (
        <img
          src={CloseBtn}
          onClick={() => setSidebar(!sidebar)}
          alt='hamburger-menu'
          className='closeBtn'
        />
      ) : (
        <img
          src={MenuBtn}
          onClick={() => setSidebar(!sidebar)}
          alt='close button'
          className='menuBtn'
        />
      )}

      {sidebar && (
        <Sidebar CloseBtn={CloseBtn} MenuBtn={MenuBtn} links={links} />
      )}

      <div className='flex items-center'>
        <div className='horizontal-line' />
        <ul className='ul'>
          {links.map((link) => {
            const { id, text, url, number } = link;
            return (
              <NavLink
                key={id}
                to={url}
                className='list main'
                style={activeLink}>
                <span className='lg:pr-3 md:pr-0 font-bold md:hidden lg:flex '>
                  {number}
                </span>
                {text}
              </NavLink>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
