import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import auth from '../firebase/config';
import UserContext from '../context/UserContext';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home';
import Profile from '../pages/Profile';

import useModal from '../hooks/useModal';
import Navbar from '../components/Navbar';
import { useEffect, useState } from 'react';

function MainRouter() {
   const [currentUser, setCurrentUser] = useState(null);
   const handlerModal = useModal();

   useEffect(() => {
      auth.onAuthStateChanged(user => {
         setCurrentUser(user);
         console.log(user);
      });
      console.log(auth.currentUser);
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
               <Route exact path="/profile" component={Profile} />
               <Route path="*" component={ErrorPage} />
            </Switch>
         </Router>
      </UserContext.Provider>
   );
}

export default MainRouter;
