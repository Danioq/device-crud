import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { devicesSelector } from './../selectors/devices'
import Device from '../components/Device'
import DeviceHeaders from '../components/DeviceHeaders'

const DeviceList = () => {
  const devices = useSelector(devicesSelector)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch({ type: 'DEVICES_FETCH_REQUEST' })
  }, [])
  return <div className="container">
    <DeviceHeaders/>
    {devices.map(device => <Device device={device} key={device.id} />)}
  </div>
}

export default DeviceList
