import { useState } from 'react';

const initialState = {
   tipo: '',
   estado: false,
};

const useModal = () => {
   const [isOpenModal, setIsOpenModal] = useState(initialState);

   const openModalLogin = () => {
      setIsOpenModal({
         tipo: 'login',
         estado: true,
      });
   };

   const openModalRegister = () => {
      setIsOpenModal({
         tipo: 'register',
         estado: true,
      });
   };

   const closeModal = () => setIsOpenModal(initialState);

   return { isOpenModal, openModalLogin, openModalRegister, closeModal };
};

export default useModal;
