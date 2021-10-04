const initialState = {
  devices: [],
  successes: {
    postSuccess: '',
    deleteSuccess: '',
    patchSuccess: '',
    fetchSuccess: ''
  }

}

const deviceReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DEVICES_FETCH_SUCCEEDED':
      return { ...state, devices: action.payload, successes: { ...state.successes, fetchSuccess: 'DEVICES_FETCH_SUCCEEDED' } }
    case 'DEVICE_POST_SUCCEEDED':
      return { ...state, successes: { ...state.successes, postSuccess: 'DEVICE_POST_SUCCEEDED' } }
    case 'DEVICE_PATCH_SUCCEEDED':
      return { ...state, successes: { ...state.successes, patchSuccess: 'DEVICE_PATCH_SUCCEEDED' } }
    case 'DEVICE_DELETE_SUCCEEDED':
      return { ...state, successes: { ...state.successes, deleteSuccess: 'DEVICE_DELETE_SUCCEEDED' } }

    case 'DEVICES_FETCH_FAILED':
      return { ...state, successes: { ...state.successes, fetchSuccess: 'DEVICES_FETCH_FAILED' } }
    case 'DEVICE_POST_FAILED':
      return { ...state, successes: { ...state.successes, postSuccess: 'DEVICE_POST_FAILED' } }
    case 'DEVICE_PATCH_FAILED':
      return { ...state, successes: { ...state.successes, patchSuccess: 'DEVICE_PATCH_FAILED' } }
    case 'DEVICE_DELETE_FAILED':
      return { ...state, successes: { ...state.successes, deleteSuccess: 'DEVICE_DELETE_FAILED' } }

    case 'RESET_MESSAGES':
      return { ...state, successes: { postSuccess: '', patchSuccess: '', deleteSuccess: '', fetchSuccess: '' } }
    default:
      return state
  }
}

export default deviceReducer
