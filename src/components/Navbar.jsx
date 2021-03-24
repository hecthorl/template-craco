import { useContext, useState } from 'react';
import { FaHamburger } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import UserContext from '../context/UserContext';
import LoginBtn from './LoginBtn';
import LogoutBtn from './LogoutBtn';
import RegisterBtn from './RegisterBtn';

const Navbar = () => {
   const { currentUser } = useContext(UserContext);
   const [toggleMenu, setToggleMenu] = useState(false);

   const buttons = () => {
      return currentUser ? (
         <LogoutBtn />
      ) : (
         <>
            <LoginBtn /> <RegisterBtn />
         </>
      );
   };

   return (
      <div className="bg-gray-300 p-1 sticky top-0 md:flex md:px-5 md:h-14 z-40">
         <div className="flex justify-between px-2 pt-1">
            <div>
               <span className="text-xl md:text-3xl">Welcome</span>
            </div>
            <FaHamburger
               className="text-xl m-0 md:hidden my-2"
               onClick={() => setToggleMenu(!toggleMenu)}
            />
         </div>

         <div
            className={`${
               toggleMenu ? 'flex' : 'hidden'
            } flex-col justify-center items-center w-full md:flex md:flex-row md:justify-end`}
         >
            <ul className="md:flex-row md:flex  md:items-center md:space-x-3">
               <li onClick={() => setToggleMenu(!toggleMenu)}>
                  <NavLink exact to="/profile">
                     Profile
                  </NavLink>
               </li>
               <li onClick={() => setToggleMenu(!toggleMenu)}>
                  <NavLink exact to="/">
                     Home
                  </NavLink>
               </li>
               <li onClick={() => setToggleMenu(!toggleMenu)}>
                  <NavLink exact to="/settings">
                     Settings
                  </NavLink>
               </li>
               <li onClick={() => setToggleMenu(!toggleMenu)}>
                  <NavLink exact to="/about">
                     About
                  </NavLink>
               </li>
            </ul>

            <div>{buttons()}</div>
         </div>
      </div>
   );
};

export default Navbar;
