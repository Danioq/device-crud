import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { patchSuccessSelector } from '../selectors/successes'
import { deviceByIdSelector } from '../selectors/devices'
import { useParams } from 'react-router-dom'

import AddEditForm from './../components/AddEditForm/index'

const EditDevice = () => {
  const dispatch = useDispatch()
  const params = useParams()
  const device = useSelector(deviceByIdSelector(params.id))
  const success = useSelector(patchSuccessSelector)

  useEffect(() => {
    dispatch({ type: 'DEVICES_FETCH_REQUEST' })
  }, [])

  if (success) {
    window.location.replace('/')
  }

  if (!device) {
    return <> Device id: {params.id} not found </>
  }
  return <AddEditForm device={device} isEdit />
}

export default EditDevice
