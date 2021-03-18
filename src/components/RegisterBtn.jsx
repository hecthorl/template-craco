import { useContext } from 'react';
import UserContext from '../context/UserContext';

const RegisterBtn = () => {
   const { handlerModal } = useContext(UserContext);

   const { openModalRegister } = handlerModal;

   return (
      <button
         onClick={openModalRegister}
         className="inline-flex bg-gray-800 py-1 px-3 focus:outline-none hover:bg-gray-600 rounded text-base mt-4 md:mt-0 md:ml-4"
      >
         Register
      </button>
   );
};

export default RegisterBtn;
