import { Formik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { postSuccessSelector } from '../selectors/successes'

const AddDevice = () => {
  const dispatch = useDispatch()
  const success = useSelector(postSuccessSelector)
  if (success) {
    window.location.replace('/')
  }
  return <Formik
    initialValues={{ name: '', description: '', disabled: false }}
    validate={values => {
      const errors = {}
      if (!values.name) {
        errors.name = 'Required'
      }
      return errors
    }}
    onSubmit={(values) => {
      dispatch({ type: 'DEVICE_POST_REQUEST', payload: values })
    }}
  >
    {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
      <form onSubmit={handleSubmit} className="container">
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
            className="col-1"
          />
          <div className="col-1">Disabled</div>
        </label>
        <button type="submit" className="row btn btn-primary">
          Add Device
        </button>
      </form>
    )}
  </Formik>
}

export default AddDevice
