import { useContext } from 'react';
import UserContext from '../context/UserContext';

const LoginBtn = () => {
   const { handlerModal } = useContext(UserContext);
   const { openModalLogin } = handlerModal;

   return (
      <button
         onClick={openModalLogin}
         className="inline-flex bg-gray-800 py-1 px-3 focus:outline-none hover:bg-gray-600 rounded text-base mt-4 md:mt-0 md:ml-4"
      >
         Login
      </button>
   );
};

export default LoginBtn;
