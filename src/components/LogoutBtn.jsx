import { useHistory } from 'react-router-dom';
import auth from '../firebase/config';

const LogoutBtn = () => {
   const history = useHistory();
   const handleLogout = () => {
      auth
         .signOut()
         .then(() => {
            history.replace('/');
            console.log('Logout successful');
         })
         .catch(err => {
            console.log('error en logout', err);
         });
   };
   return (
      <button
         onClick={handleLogout}
         className="inline-flex bg-gray-800 py-1 px-3 focus:outline-none hover:bg-gray-600 rounded text-base mt-4 md:mt-0 md:ml-4"
      >
         Logout
      </button>
   );
};

export default LogoutBtn;
