import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import './index.css';

const LoginScreen = () => {
  const history = useHistory();

  useEffect(() => {
    console.log('I am from LoginScreen');
  }, []);

  return <div>LoginScreen</div>;
};

export default LoginScreen;
