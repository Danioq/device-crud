/* eslint-disable no-undef */
import { Api } from '.'

const devicesExample = [{
  id: '09458915-dfbc-4408-a7c4-5d3162f43964',
  name: 'Device Name',
  description: 'This is device description',
  disabled: false
}]

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(devicesExample)
  })
)

beforeEach(() => {
  fetch.mockClear()
})

test('Api.get should return example devices', async () => {
  const devices = await Api.get()
  expect(devices).toStrictEqual(devicesExample)
})
