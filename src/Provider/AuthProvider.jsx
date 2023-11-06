import { createContext, useEffect, useState } from 'react';
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import auth from '../Firebase/firebase';

import axios from 'axios';

const googleProvider = new GoogleAuthProvider();
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  // const axiosSecure = useAxiosSecure(); do not use axios secure here
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);

  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const userCreate = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const userLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const profileUpdate = (name, image) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    });
  };

  const userLogOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const subscribe = onAuthStateChanged(auth, currentUser => {
      const userEmail = currentUser?.email || user?.email;
      const logUser = { email: userEmail };
      setUser(currentUser);
      setLoading(false);
      if (currentUser) {
        axios
          .post('http://localhost:5000/jwt', logUser, { withCredentials: true })
          .then(res => {
            console.log('token response', res.data);
          });
      } else {
        axios
          .post('http://localhost:5000/logout', logUser, {
            withCredentials: true,
          })
          .then(res => console.log(res.data));
      }
    });
    return () => {
      return subscribe();
    };
  }, []);
  const info = {
    user,
    loading,
    userCreate,
    userLogin,
    userLogOut,
    profileUpdate,
    googleLogin,
  };

  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
