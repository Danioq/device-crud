/* eslint-disable no-undef */
import * as React from 'react'
import renderer from 'react-test-renderer'
import Device from '.'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import deviceReducer from './../../reducers/deviceReducer'

const store = createStore(deviceReducer)
const device = {
  id: '09458915-dfbc-4408-a7c4-5d3162f43964',
  name: 'Device Name',
  description: 'This is device description',
  disabled: false
}

test('Device Match Snapshot', () => {
  const component = renderer.create(<Provider store={store}><Device device={device}/></Provider>)
  expect(component).toMatchSnapshot()
})
