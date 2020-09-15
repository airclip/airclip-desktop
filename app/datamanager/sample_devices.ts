import { Device } from '../types';

const devices: Device[] = [
  {
    deviceId: '1',
    ownerId: '1',
    type: 'desktop',
    name: 'Macbook Pro',
    os: 'macos',
    registeredAt: Date.now()
  },
  {
    deviceId: '2',
    ownerId: '1',
    type: 'desktop',
    name: 'Windows 10',
    os: 'windows',
    registeredAt: Date.now()
  },
  {
    deviceId: '3',
    ownerId: '1',
    type: 'desktop',
    name: 'Ubuntu',
    os: 'linux',
    registeredAt: Date.now()
  },
  {
    deviceId: '4',
    ownerId: '1',
    type: 'mobile',
    name: 'iPhone 10',
    os: 'ios',
    registeredAt: Date.now()
  },
  {
    deviceId: '5',
    ownerId: '1',
    type: 'desktop',
    name: 'OnePlus',
    os: 'android',
    registeredAt: Date.now()
  }
];

export default devices;
