const initialState = {
  devices: []
}

const deviceReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_DEVICES':
      return { ...state, devices: action.payload }
    default:
      return state
  }
}

export default deviceReducer
