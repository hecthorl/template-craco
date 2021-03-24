import { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import UserContext from '../context/UserContext';

const PrivateProfile = ({ component: Component, ...rest }) => {
   const { currentUser } = useContext(UserContext);

   return (
      <Route {...rest}>
         {currentUser ? <Component /> : <Redirect to="/" />}
      </Route>
   );
};

export default PrivateProfile;
