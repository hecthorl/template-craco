import { useFormik } from 'formik';
import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import UserContext from '../context/UserContext';
import login from '../helpers/google/login';
import validations from '../helpers/validations';

const LoginForm = () => {
   const [loading, setLoading] = useState(false);
   const history = useHistory();
   const { handlerModal } = useContext(UserContext);

   const { openModalRegister, closeModal } = handlerModal;

   const formik = useFormik({
      initialValues: {
         email: '',
         password: '',
      },
      validationSchema: Yup.object({
         email: Yup.string()
            .required('Required')
            .email('Invalid email address'),
         password: Yup.string()
            .required('Required')
            .min(6, 'Debe ser mayor a 6 caracteres'),
      }),
      onSubmit: async ({ email, password }) => {
         setLoading(true);
         try {
            // const userSigned = await login(email, password);
            await login(email, password);

            closeModal();

            history.replace('/profile');
            // console.log(userSigned);
         } catch (err) {
            console.log(err, 'error en loginform');
         }
      },
   });
   const handlerLoading = loading
      ? 'inline-block disabled:opacity-50'
      : 'hidden';
   const handlerCursor = loading ? 'cursor-not-allowed' : '';
   return (
      <form
         onSubmit={formik.handleSubmit}
         noValidate
         className="flex flex-col pb-3 w-full px-5 md:max-w-md lg:max-w-lg xl:max-w-2xl"
      >
         <h1 className="text-center font-semibold text-gray-900 py-5 md:text-5xl text-4xl md:py-6">
            Login
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
            {formik.errors.email ? formik.errors.email : 'se vera?'}
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
         <button
            disabled={loading}
            type="submit"
            className={`bg-gray-600 rounded-md text-xl w-full focus:outline-none hover:bg-gray-700 py-1 font-semibold text-gray-200 ${handlerCursor}`}
         >
            <svg
               className={`${handlerLoading} animate-spin  mr-1 h-5 w-5 text-white`}
               xmlns="http://www.w3.org/2000/svg"
               fill="none"
               viewBox="0 0 24 24"
            >
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
            {/* <span className="ml-2">Send</span> */}
         </button>
         <div className="text-base text-center">
            <p>
               Doesn't have an account?,
               <button
                  onClick={openModalRegister}
                  className="hover:underline hover:text-gray-200 cursor-pointer ml-1"
               >
                  Register
               </button>
            </p>
         </div>
      </form>
   );
};

export default LoginForm;
