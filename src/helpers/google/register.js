import auth from '../../firebase/config';

export const register = (email, password) => {
   return auth.createUserWithEmailAndPassword(email, password);
};

export const registerWithGoogle = () => {
   return new auth.GoogleAuthProvider();
};
