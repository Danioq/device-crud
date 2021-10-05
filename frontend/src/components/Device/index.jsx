import * as React from 'react'
import PropTypes from 'prop-types'
import ThrashIcon from './thrashIcon'
import { useDispatch } from 'react-redux'
import EditIcon from './editIcon'
import CheckIcon from './checkIcon'

const Device = (props) => {
  const dispatch = useDispatch()
  const { device } = props

  const handleEdit = () => {
    window.location.assign(`\\edit\\${device.id}`)
  }
  const handleDelete = () => {
    dispatch({ type: 'DEVICE_DELETE_REQUEST', payload: device.id })
  }
  return <tr>
    <th scope="row" className="text-break">{device.id}</th>
    <td className="text-break">{device.name}</td>
    <td className="text-break">{device.description}</td>
    <td>{device.disabled && <CheckIcon />}</td>
    <td><EditIcon onClick={handleEdit}/></td>
    <td><ThrashIcon onClick={handleDelete}/></td>
  </tr>
}

Device.propTypes = {
  device: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.string,
    description: PropTypes.string,
    disabled: PropTypes.bool
  })
}

export default Device
