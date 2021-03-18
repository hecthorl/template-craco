import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
   apiKey: 'AIzaSyAz2fQcL_nY7iXeKN_CSsHxSzfUKdgY92Q',
   authDomain: 'sigin-test-gaaa.firebaseapp.com',
   projectId: 'sigin-test-gaaa',
   storageBucket: 'sigin-test-gaaa.appspot.com',
   messagingSenderId: '880843056597',
   appId: '1:880843056597:web:9a47984bb3a46542ba095c',
};

const app = firebase.initializeApp(firebaseConfig);
// firebase.auth().useDeviceLanguage();
//comentado, deberia mostrar la interfaz de login en ingles

export default firebase.auth(app);
