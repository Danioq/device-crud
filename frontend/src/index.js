import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
