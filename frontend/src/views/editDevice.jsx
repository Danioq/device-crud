import { useEffect } from 'react'
import { Formik } from 'formik'
import { useDispatch, useSelector, useStore } from 'react-redux'
import { patchSuccessSelector } from '../selectors/successes'
import { deviceByIdSelector } from '../selectors/devices'
import { useParams } from 'react-router-dom'

const EditDevice = () => {
  const dispatch = useDispatch()
  const params = useParams()
  const store = useStore()
  console.log(store.getState())

  const device = useSelector(deviceByIdSelector(params.id))
  const success = useSelector(patchSuccessSelector)
  useEffect(() => {
    dispatch({ type: 'DEVICES_FETCH_REQUEST' })
  }, [])
  if (success) {
    window.location.replace('/')
  }
  if (!device) {
    return <>
    Device id: {params.id} not found
  </>
  }
  return <>
  <div>Editing: {device.id}</div>
   <Formik
    initialValues={{ name: device.name, description: device.description, disabled: device.disabled }}
    validate={values => {
      const errors = {}
      if (!values.name) {
        errors.name = 'Required'
      }
      return errors
    }}
    onSubmit={(values) => {
      dispatch({ type: 'DEVICE_PATCH_REQUEST', payload: { ...values, id: params.id } })
    }}
  >
    {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
      <form onSubmit={handleSubmit} className="container justify-content-center align-items-center">
        <label className="row">
          Name
          <input
            type="text"
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
          />
        </label>
        {errors.name && touched.name && errors.name}
        <label className="row">
        Description
          <input
            type="text"
            name="description"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.description}

          />
        </label>
        <label className="row">
        <input
            type="checkbox"
            name="disabled"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.disabled}
            className="col-1 align-items-center"
            />
        <div className="col-1">
            Disabled
            </div>
        </label>

        <button type="submit" className="row">
          Edit Device
        </button>
      </form>
    )}
  </Formik></>
}

export default EditDevice
