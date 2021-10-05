import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { devicesSelector } from './../selectors/devices'
import Device from '../components/Device'
import './deviceList.css'

const DeviceList = () => {
  const devices = useSelector(devicesSelector)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch({ type: 'DEVICES_FETCH_REQUEST' })
  }, [])
  return <div className="listWrapper">
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">description</th>
          <th scope="col">disabled</th>
        </tr>
      </thead>
      <tbody>

    {devices.map(device => <Device device={device} key={device.id} />)}
      </tbody>
    </table>
    <button className="btn btn-primary buttonAdd" onClick={() => window.location.assign('/add')}>Add Device</button>
  </div>
}

export default DeviceList
