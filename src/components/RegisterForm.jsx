import { useFormik } from 'formik';
import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
// import { useHistory } from 'react-router';

import * as Yup from 'yup';
import UserContext from '../context/UserContext';
import { register } from '../helpers/google/register';
import validations from '../helpers/validations';

const RegisterForm = () => {
   const history = useHistory();
   const [loading, setLoading] = useState(false);
   const { handlerModal } = useContext(UserContext);
   const { openModalLogin, closeModal } = handlerModal;

   // const history = useHistory();
   const formik = useFormik({
      initialValues: {
         email: '',
         password: '',
         passwordConfirm: '',
      },
      validationSchema: Yup.object({
         email: Yup.string()
            .required('Required')
            .email('Invalid email address'),
         password: Yup.string()
            .required('Required')
            .min(6, 'Debe ser mayor a 6 caracteres'),
         passwordConfirm: Yup.string()
            .required('Required')
            .oneOf([Yup.ref('password'), null], 'Contraseñas no coinciden'),
         // .equals(password, 'Contraseñas no coinciden'),
      }),
      onSubmit: async values => {
         //hacer lo que quiera con los valores
         setLoading(true);
         const { email, password } = values;

         try {
            await register(email, password);
            // const { user } = await register(email, password);
            // history.pushState(user, 'usraui', '/profile');

            // const { email: correo, uid, emailVerified, photoURL } = user;
            // const currentUser = {
            //    name: correo,
            //    correo,
            //    emailVerified,
            //    photoURL: photoURL ? photoURL : 'https://picsum.photos/200',
            //    uid,
            // };
            /**
             * para añadir al objeto: theme y subscribe
             */
            closeModal();
            history.replace('/profile');
            // console.log(currentUser);
            // <Redirect to="/profile" />;
            // console.log(user);
         } catch (err) {
            setLoading(false);
            console.log('Errores en register');
            console.log(err);
         }
      },
   });
   const handlerLoading = loading
      ? 'inline-block disabled:opacity-50'
      : 'hidden';

   return (
      <form
         onSubmit={formik.handleSubmit}
         className="flex flex-col pb-3 w-full px-5 md:max-w-md lg:max-w-lg xl:max-w-2xl"
         noValidate
      >
         <h1 className="text-center font-semibold text-gray-900 py-5 md:text-5xl text-4xl md:py-6">
            Register
         </h1>
         <input
            id="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            placeholder="Email"
            className="w-full rounded-md "
            type="email"
         />
         <span
            className={`text-sm text-red-500 mb-3 ${validations(
               formik.touched.email,
               formik.errors.email
            )}`}
         >
            {formik.errors.email ? formik.errors.email : 'no show'}
         </span>
         <input
            id="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            placeholder="Password"
            className="w-full rounded-md "
            type="password"
         />
         <span
            className={`text-sm text-red-500 mb-3 ${validations(
               formik.touched.password,
               formik.errors.password
            )}`}
         >
            {formik.errors.password ? formik.errors.password : 'no show'}
         </span>
         <input
            id="passwordConfirm"
            name="passwordConfirm"
            onChange={formik.handleChange}
            value={formik.values.passwordConfirm}
            placeholder="Confirm password"
            className="w-full rounded-md "
            type="password"
         />
         <span
            className={`text-sm text-red-500 mb-3 ${validations(
               formik.touched.passwordConfirm,
               formik.errors.passwordConfirm
            )}`}
         >
            {formik.errors.passwordConfirm
               ? formik.errors.passwordConfirm
               : 'no show'}
         </span>
         <button
            disabled={loading}
            type="submit"
            className="bg-gray-600 rounded-md text-xl w-full focus:outline-none hover:bg-gray-700 py-1 font-semibold text-gray-200"
         >
            <svg
               className={`${handlerLoading} animate-spin mr-1 h-5 w-5 text-white`}
               xmlns="http://www.w3.org/2000/svg"
               fill="none"
               viewBox="0 0 24 24"
            >
               {/* inline-block */}
               <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
               ></circle>
               <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
               ></path>
            </svg>
            Send
         </button>
         <div className="text-base text-center">
            <p>
               Ya tienes una cuenta?,
               <button
                  onClick={openModalLogin}
                  className="hover:underline hover:text-gray-200 cursor-pointer ml-1"
               >
                  Login
               </button>
            </p>
         </div>
      </form>
   );
};

export default RegisterForm;
