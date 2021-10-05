import { useSelector } from 'react-redux'
import { postSuccessSelector } from '../selectors/successes'
import AddEditForm from './../components/AddEditForm/index'

const AddDevice = () => {
  const success = useSelector(postSuccessSelector)
  if (success) {
    window.location.replace('/')
  }
  return <AddEditForm />
}

export default AddDevice
