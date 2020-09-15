import {
  Settings,
  DeviceMap,
  ActivityMap,
  LoginSession,
  DevicesStatus
} from '../types';

export type AppState = {
  session: LoginSession | null;
  devices: DeviceMap;
  activities: ActivityMap;
  settings: Settings;
  devicesStatus: DevicesStatus;
};

export type Action = {
  type: string;
  payload: any;
};
