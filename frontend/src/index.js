import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import 'bootstrap/dist/css/bootstrap.css'
import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware } from 'redux'
import deviceSaga from './sagas/deviceSaga'
import deviceReducer from './reducers/deviceReducer'
import { Provider } from 'react-redux'

const sagaMiddleWare = createSagaMiddleware()
const store = createStore(deviceReducer, applyMiddleware(sagaMiddleWare))
sagaMiddleWare.run(deviceSaga)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
