import * as React from 'react'
import { Formik } from 'formik'
import { useDispatch } from 'react-redux'
import './addEditDevice.css'
import { PropTypes } from 'prop-types'

const specialCharactersPattern = /[ `!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/

function AddEditForm(props) {
  const dispatch = useDispatch()
  const { device, isEdit } = props

  const Header = () => {
    if (isEdit) {
      return <div className="headerInfo">
        <div>Editing:</div> <b>{device.id}</b>
        </div>
    }
    return <div className="headerInfo">Adding Device</div>
  }
  return <div className="addEditDeviceContainer">
    <Header />
    <Formik
      initialValues={{ name: device?.name || '', description: device?.description || '', disabled: device?.disabled || false }}
      validate={values => {
        const errors = {}
        if (!values.name) {
          errors.name = 'Required'
        }
        if (values.name.match(specialCharactersPattern)) {
          errors.name = 'Name should not contain special characters'
        }
        return errors
      } }
      onSubmit={(values) => {
        if (isEdit) {
          dispatch({ type: 'DEVICE_PATCH_REQUEST', payload: { ...values, id: device.id } })
        } else {
          dispatch({ type: 'DEVICE_POST_REQUEST', payload: { ...values } })
        }
      } }
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="addNameInput">Name</label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              className="form-control"
              id="addNameInput" />
            <div className="errorMessage">{errors.name && touched.name && errors.name}</div>
            <div className="form-group"></div>
            <label htmlFor="addDescriptionInput">Description</label>
            <textarea
              type="text"
              name="description"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.description}
              className="form-control"
              id="addDescriptionInput"
              rows="5"
              />
            <div className="form-check">
              <input
                type="checkbox"
                name="disabled"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.disabled}
                className="form-check-input"
                id="addDisabledCheck" />
              <label htmlFor="addDisabledCheck" className="form-check-label">Disabled</label>
            </div>
            <button type="submit" className="btn btn-primary">Add Device</button>
            <button className="btn btn-primary cancelButton" onClick={() => history.goBack()}>Cancel</button>
          </div>
        </form>
      )}
    </Formik>
  </div>
}

AddEditForm.propTypes = {
  device: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.string,
    description: PropTypes.string,
    disabled: PropTypes.bool
  }),
  isEdit: PropTypes.bool
}

export default AddEditForm
