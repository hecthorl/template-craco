import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import auth from '../firebase/config';
import UserContext from '../context/UserContext';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home';
import Profile from '../pages/Profile';

import useModal from '../hooks/useModal';
import Navbar from '../components/Navbar';
import { useEffect, useState } from 'react';
import PrivateRoute from './PrivateRoute';
import Settings from '../pages/Settings';
import About from '../pages/About';

function MainRouter() {
   const [currentUser, setCurrentUser] = useState(null);
   const handlerModal = useModal();

   useEffect(() => {
      auth.onAuthStateChanged(user => {
         setCurrentUser(user);
         // console.log(user);
      });
      // auth.currentUser.updateEmail()
   }, []);

   const data = {
      handlerModal,
      currentUser,
   };

   return (
      <UserContext.Provider value={data}>
         <Router>
            <Navbar />
            <Switch>
               <Route exact path="/" component={Home} />
               <PrivateRoute exact path="/profile" component={Profile} />
               <PrivateRoute exact path="/settings" component={Settings} />
               <Route exact path="/about" component={About} />
               <Route path="*" component={ErrorPage} />
            </Switch>
         </Router>
      </UserContext.Provider>
   );
}

export default MainRouter;
