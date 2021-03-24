import { useContext } from 'react';
import UserContext from '../context/UserContext';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const Modal = () => {
   //
   const { handlerModal } = useContext(UserContext);
   const { isOpenModal, closeModal } = handlerModal;

   // console.log(isOpenModal);

   const modalSelector = () => {
      if (isOpenModal.tipo === 'login') return <LoginForm />;
      if (isOpenModal.tipo === 'register') return <RegisterForm />;
   };

   const modalToggleCSS = () => (isOpenModal.estado ? 'flex' : 'hidden');

   const handleModalClick = event => event.stopPropagation();

   return (
      <div
         onClick={closeModal}
         className={`${modalToggleCSS()} z-50 fixed top-0 h-screen w-screen backdrop-blur text-2xl`}
      >
         <div className="h-screen w-screen p-3">
            <div
               onClick={handleModalClick}
               className="flex flex-col animate-fading pb-6 rounded-md shadow-3xl justify-items-center relative bg-gray-400 md:w-full mx-auto max-w-md"
            >
               <button
                  className="focus:outline-none text-gray-800 font-bold absolute -top-1 right-1 hover:text-gray-700"
                  onClick={closeModal}
               >
                  &times;
               </button>
               {modalSelector()}
               <hr className="w-1/2 mx-auto" />
               <div className="grid px-6 gap-2 mt-3 mx-auto w-full">
                  <button className="bg-gray-600 rounded-md text-xl hover:text-gray-200 focus:outline-none hover:bg-gray-700 py-1">
                     Google
                  </button>
                  <button className="bg-gray-600 rounded-md text-xl hover:text-gray-200 focus:outline-none hover:bg-gray-700 py-1 ">
                     Facebook
                  </button>
                  <button className="bg-gray-600 rounded-md text-xl hover:text-gray-200 focus:outline-none hover:bg-gray-700 py-1 ">
                     Github
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Modal;
