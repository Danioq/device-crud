import { createSelector } from 'reselect'

export const devicesSelector = state => state.devices
export const sumDisabledDevicesSelector = createSelector(
  devicesSelector,
  devices => devices.reduce((acc, device) => acc + device.disabled, 0)
)

export const deviceByIdSelector = id => createSelector(
  devicesSelector,
  devices => devices.filter(device => device.id === id)[0]
)
