import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const useAuth = () => {
  const auth = useContext(AuthContext);
  // if (auth === null) {
  //   throw new Error('useAuth must be used within an AuthProvider');
  // }
  return auth;
};

export default useAuth;
