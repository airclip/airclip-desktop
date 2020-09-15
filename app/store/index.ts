import { createStore, Store, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
import { AppState, Action } from './types';

let store: Store<AppState, Action> | undefined;

export const configureStore = (initialState: AppState) => {
  store = createStore(reducer, initialState, applyMiddleware(thunk));
  return store;
};

export const getStore = () => {
  return store;
};
