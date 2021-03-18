import auth from '../../firebase/config';

const login = (email, password) => {
   return auth.signInWithEmailAndPassword(email, password);
};

export default login;
