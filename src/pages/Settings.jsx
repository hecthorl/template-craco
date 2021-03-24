import { motion } from 'framer-motion';
import { useContext, useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import UserContext from '../context/UserContext';
import { useForm } from '../hooks/useForm';
import useToggle from '../hooks/useToggle';

const Settings = () => {
   const { currentUser } = useContext(UserContext);
   const { email, displayName } = currentUser;
   const [values, handleInputChange] = useForm();
   const [alert, setAlert] = useState({
      enable: false,
      tipo: '',
      msg: '',
   });

   const {
      toggleUsername,
      setToggleUsername,
      toggleEmail,
      setToggleEmail,
      togglePassword,
      setTogglePassword,
   } = useToggle();

   const upDateUsername = event => {
      event.preventDefault();
      if (!values.username) {
         setAlert({
            enable: true,
            tipo: 'text-red-800 bg-red-200',
            msg: 'Campo requerido',
         });
         setTimeout(() => {
            setAlert({
               ...alert,
               enable: false,
            });
         }, 2500);
         return;
      }

      const newName = values.username.trim();

      if (newName.length < 1) return console.error('No se puede guardar asi!');

      currentUser
         .updateProfile({
            displayName: newName,
         })
         .then(() => {
            console.log('Nombre cambiado exitosamente');
            setAlert({
               enable: true,
               tipo: 'text-green-800 bg-green-200',
               msg: 'Nombre cambiado exitosamente',
            });
            setTimeout(() => {
               setAlert({
                  ...alert,
                  enable: false,
               });
            }, 2500);
            setToggleUsername(false);
         })
         .catch(err => {
            console.log(err, 'Error en update profile');
            setAlert({
               enable: true,
               tipo: 'text-red-800 bg-red-200',
               msg: 'No se pudo cambiar el nombre',
            });
         });
   };

   const upDateEmail = event => {
      event.preventDefault();
      if (!values.email) {
         setAlert({
            enable: true,
            tipo: 'text-red-800 bg-red-200',
            msg: 'Campo requerido',
         });
         setTimeout(() => {
            setAlert({
               ...alert,
               enable: false,
            });
         }, 2500);
         return;
      }

      const emailRegEx = new RegExp(
         /^(([^<>()[\],;:\s@]+([^<>()[\],;:\s@]+)*)|(.+))@(([^<>()[\],;:\s@]+)+[^<>()[\],;:\s@]{2,})$/i
      );
      if (!emailRegEx.test(values.email))
         return console.error('Email no valido');

      currentUser
         .updateEmail(values.email)
         .then(() => {
            console.log(values.email, 'successfully');
            setAlert({
               enable: true,
               tipo: 'text-green-800 bg-green-200',
               msg: 'Email cambiado exitosamente',
            });
            setTimeout(() => {
               setAlert({
                  ...alert,
                  enable: false,
               });
            }, 2500);
            setToggleEmail(false);
         })
         .catch(err => console.log(err, 'Error en upDateEmail'));
   };

   const upDatePassword = event => {
      event.preventDefault();

      if (!values.newPassword) {
         setAlert({
            enable: true,
            tipo: 'text-red-800 bg-red-200',
            msg: 'Campo requerido',
         });
         setTimeout(() => {
            setAlert({
               ...alert,
               enable: false,
            });
         }, 2500);
         return;
      }

      if (values.newPassword.length < 6)
         return console.error('Tiene q ser mayor a 6 caracteres');

      currentUser
         .updatePassword(values.newPassword)
         .then(() => {
            console.log('contraseña cambiada exitosamente');
            setAlert({
               enable: true,
               tipo: 'text-green-800 bg-green-200',
               msg: 'Contraseña cambiada exitosamente',
            });
            setTimeout(() => {
               setAlert({
                  ...alert,
                  enable: false,
               });
            }, 2500);
            setTogglePassword(false);
         })
         .catch(err => {
            console.log(err, 'Error en updatePassword');
            setAlert({
               enable: true,
               tipo: 'text-red-800 bg-red-200',
               msg: err.message,
            });
            setTimeout(() => {
               setAlert({
                  ...alert,
                  enable: false,
               });
            }, 2500);
         });
   };

   return (
      <div className="text-gray-400 z-0 h-screen bg-gradient-to-r from-gray-500 to-gray-700 body-font">
         {alert.enable && (
            <motion.div
               initial={{ x: '150%' }}
               animate={{ x: 0 }}
               transition={{ duration: 1 }}
               className={`fixed right-0 max-w-max p-2 ${alert.tipo}`}
            >
               {alert.msg}
            </motion.div>
         )}
         <div className="container px-5 pt-12 mx-auto">
            <h1 className="text-2xl font-semibold text-gray-200 md:pb-5 md:text-3xl">
               Configuración general de la cuenta
            </h1>
            <hr />
            <div className="flex flex-col mt-5 border border-gray-400 divide-y rounded py-2 space-y-2 md:max-w-4xl mx-auto bg-gray-800">
               <div className="relative px-2 pt-2">
                  <span className="text-gray-200">Nombre de usuario</span>
                  <button
                     onClick={() => setToggleUsername(true)}
                     className={`${
                        !toggleUsername ? 'inline-block' : 'hidden'
                     } hover:bg-gray-700 absolute right-5 top-3 bg-gray-500 text-gray-100 rounded-full focus:outline-none p-2`}
                  >
                     <FaEdit className="pointer-events-none" />
                  </button>
                  <p>{displayName ? displayName : email}</p>
                  <form onSubmit={upDateUsername} className="flex flex-col">
                     <input
                        className={`${
                           toggleUsername ? 'inline-block' : 'hidden'
                        } rounded text-gray-800 my-1`}
                        name="username"
                        type="text"
                        onChange={handleInputChange}
                     />
                     <button
                        className={`${
                           toggleUsername ? 'inline-block' : 'hidden'
                        } focus:outline-none bg-gray-700 p-1 mt-1 rounded`}
                        type="submit"
                     >
                        Guardar
                     </button>
                  </form>
                  <button
                     className={`${
                        toggleUsername ? 'inline-block' : 'hidden'
                     } w-full focus:outline-none bg-gray-700 p-1 mt-1 rounded`}
                     onClick={() => setToggleUsername(false)}
                  >
                     Cancelar
                  </button>
               </div>
               <div className="relative px-2 pt-2">
                  <span className="text-gray-200">Email</span>
                  <button
                     onClick={() => setToggleEmail(true)}
                     className={`${
                        !toggleEmail ? 'inline-block' : 'hidden'
                     } absolute right-5 top-3 bg-gray-500 text-gray-100 rounded-full p-2 focus:outline-none hover:bg-gray-700`}
                  >
                     <FaEdit className="pointer-events-none" />
                  </button>
                  <p>{email}</p>
                  <form onSubmit={upDateEmail} className="flex flex-col">
                     <input
                        className={`${
                           toggleEmail ? 'inline-block' : 'hidden'
                        } rounded my-1 text-gray-800`}
                        type="text"
                        name="email"
                        onChange={handleInputChange}
                     />
                     <button
                        className={`${
                           toggleEmail ? 'inline-block' : 'hidden'
                        } focus:outline-none bg-gray-700 p-1 mt-1 rounded`}
                        type="submit"
                     >
                        Guardar
                     </button>
                  </form>
                  <button
                     className={`${
                        toggleEmail ? 'inline-block' : 'hidden'
                     } w-full focus:outline-none bg-gray-700 p-1 mt-1 rounded`}
                     onClick={() => setToggleEmail(false)}
                  >
                     Cancelar
                  </button>
               </div>
               <div className="relative px-2 pt-2 min-h-56">
                  <span className="text-gray-200 mb-2">Contraseña</span>
                  <button
                     onClick={() => setTogglePassword(true)}
                     className={`${
                        !togglePassword ? 'inline-block' : 'hidden'
                     } absolute right-5 top-3 bg-gray-500 text-gray-100 rounded-full p-2 focus:outline-none hover:bg-gray-700`}
                  >
                     <FaEdit className="pointer-events-none" />
                  </button>
                  <form onSubmit={upDatePassword} className="flex flex-col">
                     <input
                        className={`${
                           togglePassword ? 'inline-block' : 'hidden'
                        } rounded my-1 text-gray-800`}
                        type="password"
                        name="newPassword"
                        onChange={handleInputChange}
                     />
                     <button
                        className={`${
                           togglePassword ? 'inline-block' : 'hidden'
                        } focus:outline-none bg-gray-700 p-1 mt-1 rounded`}
                        type="submit"
                     >
                        Guardar
                     </button>
                  </form>
                  <button
                     className={`${
                        togglePassword ? 'inline-block' : 'hidden '
                     } focus:outline-none bg-gray-700 p-1 mt-1 rounded w-full`}
                     onClick={() => setTogglePassword(false)}
                  >
                     Cancelar
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Settings;
