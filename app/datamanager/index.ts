import sampleActivities from './sample_activities';
import sampleDevices from './sample_devices';
import {
  DeviceMap,
  ActivityMap,
  Settings,
  LoginSession,
  SyncDirection,
  DevicesStatus
} from '../types';

export const fetchLoginSession = async (): Promise<LoginSession | null> => {
  return {} as LoginSession;
};

// Read from local database, and the local database will be updated when connecting to websocket server.
export const fetchDevices = async () => {
  return sampleDevices.reduce((acc, next) => {
    acc[next.deviceId] = next;
    return acc;
  }, {} as DeviceMap);
};

export const fetchDevicesStatus = async () => {
  // Fetch from server.
  return {} as DevicesStatus;
};

export const fetchActivities = async () => {
  return sampleActivities.reduce((acc, next) => {
    acc[next.activityId] = next;
    return acc;
  }, {} as ActivityMap);
};

export const clearActivities = async (_activityIds: string[]) => {};

export const clearAllActivities = async () => {};

export const fetchSettings = async (): Promise<Settings> => {
  return { incomingSyncEnabled: true, outgoingSyncEnabled: true };
};

export const updateSyncStatus = async (
  _direction: SyncDirection,
  _status: boolean
) => {};
