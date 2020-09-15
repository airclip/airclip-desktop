import React, { useEffect, useState } from 'react';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from '../App';
import { AppState } from '../../store/types';
import {
  fetchDevices,
  fetchActivities,
  fetchSettings
} from '../../datamanager';
import { configureStore } from '../../store';

console.log(require('../../assets/images/logo.png'));

const AppLoader = () => {
  const [appState, setAppState] = useState<AppState | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchInitialState = async () => {
      const initialState: AppState = {
        // session: await fetchLoginSession(),
        session: null,
        devices: await fetchDevices(),
        activities: await fetchActivities(),
        settings: await fetchSettings(),
        devicesStatus: {} // It will be updated asynchronously.
      };

      return initialState;
    };

    fetchInitialState()
      .then(initialState => {
        setAppState(initialState);
      })
      .catch(err => {
        setError(new Error(err.message || String(err)));
      });
  }, []);

  return !error && appState ? (
    <Provider store={configureStore(appState)}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  ) : (
    <div className="app-loader">
      <div className="loader-container">
        <img
          src={require('../../assets/images/logo.png')}
          alt="ClipSynk Logo"
        />
      </div>
      {error ? <div>{error?.message}</div> : null}
    </div>
  );
};

export default AppLoader;
