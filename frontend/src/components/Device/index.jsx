import PropTypes from 'prop-types'
import ThrashIcon from './thrashIcon'
import { useDispatch } from 'react-redux'
import EditIcon from './editIcon'

const Device = (props) => {
  const dispatch = useDispatch()
  const handleEdit = () => {
    window.location.assign(`\\edit\\${props.device.id}`)
  }
  const handleDelete = () => {
    dispatch({ type: 'DEVICE_DELETE_REQUEST', payload: props.device.id })
  }
  return <div className="row mt-4">
      <div className="col-5">{props.device.id}</div>
      <div className="col">{props.device.name}</div>
      <div className="col">{props.device.description}</div>
      <div className="col">{props.device.disabled ? 'true' : 'false'}</div>
      <div className="col"><EditIcon onClick={handleEdit}/></div>
      <div className="col"><ThrashIcon onClick={handleDelete}/></div>
    </div>
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
