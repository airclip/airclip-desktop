import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { hot } from 'react-hot-loader/root';
import './index.css';
import LoginScreen from '../../screens/LoginScreen';
import SignupScreen from '../../screens/SignupScreen';
import HomeScreen from '../../screens/HomeScreen';
import { fetchDevicesStatus } from '../../datamanager';
import { updateDevicesStatus } from '../../store/actions';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchDevicesStatus()
      .then(devicesStatus => {
        dispatch(updateDevicesStatus(devicesStatus));
      })
      .catch(err => {
        console.error(err);
      });
  }, [dispatch]);

  return (
    <div className="app">
      <Switch>
        <Route path="/" exact component={HomeScreen} />
        <Route path="/login" exact component={LoginScreen} />
        <Route path="/signup" exact component={SignupScreen} />
      </Switch>
    </div>
  );
};

let appComp;
if (process.env.NODE_ENV === 'development') {
  appComp = hot(App);
} else {
  appComp = App;
}

const Comp = appComp;
export default Comp;
