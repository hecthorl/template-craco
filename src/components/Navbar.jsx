import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import UserContext from '../context/UserContext';
import LoginBtn from './LoginBtn';
import LogoutBtn from './LogoutBtn';
import RegisterBtn from './RegisterBtn';

const Navbar = () => {
   const { currentUser } = useContext(UserContext);

   const btns = () => {
      return currentUser ? (
         <LogoutBtn />
      ) : (
         <>
            <LoginBtn /> <RegisterBtn />
         </>
      );
   };

   return (
      <header className="text-gray-400 bg-gray-700 sticky top-0 body-font">
         <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <div className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
               <span className="ml-3 text-xl">
                  {currentUser ? currentUser.email : 'Welcome'}
               </span>
            </div>
            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
               <ul className="space-y-2 md:space-x-3 md:inline-flex h-full">
                  <li className="hover:text-white mt-2">
                     <NavLink exact to="/profile">
                        Profile
                     </NavLink>
                  </li>
                  <li className="hover:text-white">
                     <NavLink exact to="/">
                        Home
                     </NavLink>
                  </li>
                  <li className="hover:text-white">Third Link</li>
                  <li className="hover:text-white">Fourth Link</li>
               </ul>
            </nav>
            {btns()}
         </div>
      </header>
   );
};

export default Navbar;
