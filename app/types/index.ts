export type User = {
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
  countryCode: string;
  joinedAt: number;
};

export type Device = {
  deviceId: string;
  ownerId: string;
  type: DeviceType;
  name: string;
  os: DeviceOS;
  registeredAt: number;
};

export type DeviceType = 'desktop' | 'mobile';

export type DeviceOS = 'android' | 'ios' | 'macos' | 'windows' | 'linux';

export type DeviceMap = { [deviceID: string]: Device };

export type DevicesStatus = {
  [deviceId: string]: DeviceStatus | undefined;
};

export type DeviceStatus = {
  isOnline: boolean;
};

export type Activity = {
  activityId: string;
  type: ActivityType;
  targetDeviceId: string;
  content: string;
  happenedAt: number;
};

export type ActivityType = 'incoming' | 'outgoing';

export type ActivityMap = { [activityId: string]: Activity };

export type Settings = {
  incomingSyncEnabled: boolean;
  outgoingSyncEnabled: boolean;
};

export type LoginSession = {
  token: string;
  user: User;
  device: Device;
};

export type SyncDirection = 'incoming' | 'outgoing';
