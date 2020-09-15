import { Action, AppState } from './types';
import {
  UPDATE_SESSION,
  UPDATE_ACTIVITIES,
  UPDATE_DEVICES,
  UPDATE_DEVICES_STATUS,
  UPDATE_SETTINGS
} from './constants';

const initialState: AppState = {
  session: null,
  devices: {},
  activities: {},
  settings: {
    incomingSyncEnabled: true,
    outgoingSyncEnabled: true
  },
  devicesStatus: {}
};

export default (state = initialState, action: Action): AppState => {
  const { type, payload } = action;

  switch (type) {
    case UPDATE_SESSION:
      return { ...state, session: payload.session };
    case UPDATE_DEVICES:
      return { ...state, devices: payload.devices };
    case UPDATE_DEVICES_STATUS:
      return { ...state, devicesStatus: payload.devicesStatus };
    case UPDATE_ACTIVITIES:
      return { ...state, activities: payload.activities };
    case UPDATE_SETTINGS:
      return { ...state, settings: payload.settings };
    default:
      return state;
  }
};
