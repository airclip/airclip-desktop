import React, { useLayoutEffect } from 'react';
import { useHistory } from 'react-router';
import './index.css';
import { useSelector } from 'react-redux';
import { AppState } from '../../store/types';

const HomeScreen = () => {
  const session = useSelector((state: AppState) => state.session);
  const history = useHistory();

  useLayoutEffect(() => {
    if (!session) {
      history.push('/login');
    }
  }, [session]);

  return <div>HomeScreen</div>;
};

export default HomeScreen;
