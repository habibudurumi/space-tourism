/** @format */
import { NavLink } from "react-router-dom";
const Sidebar = ({ links }) => {
  const activeLink = ({ isActive }) => {
    return {
      borderRight: isActive ? "4px solid white" : "none",
    };
  };
  return (
    <div className='absolute top-0 right-0  min-h-full  bg-opacity-30 w-[60%] backdrop-blur-sm bg-dark-blue md:hidden lg:hidden'>
      <ul className='mt-[8rem] ml-10 flex flex-col '>
        {links.map((link) => {
          const { text, url, id, number } = link;
          return (
            <NavLink
              key={id}
              to={url}
              className='mt-8 tracking-wide text-white w-full border-r-4 hover:border-b-0'
              style={activeLink}>
              <span className='mr-2 font-bold'>{number}</span>
              {text}
            </NavLink>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
