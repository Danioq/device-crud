import { call, put, takeEvery, all } from 'redux-saga/effects'
import { Api } from './../api'

function* fetchDevices() {
  try {
    const devices = yield call(Api.get)
    yield put({ type: 'DEVICES_FETCH_SUCCEEDED', payload: devices })
  } catch (e) {
    yield put({ type: 'DEVICES_FETCH_FAILED', payload: e.message })
  }
}

function* deleteDevice(action) {
  try {
    yield call(Api.del, action.payload.deviceID)
    yield put({ type: 'DEVICE_DELETE_SUCCEEDED' })
  } catch (e) {
    yield put({ type: 'DEVICE_DELETE_FAILED', payload: e.message })
  }
}

function* patchDevice(action) {
  try {
    yield call(Api.patch, action.payload.device)
    yield put({ type: 'DEVICE_PATCH_SUCCEEDED' })
  } catch (e) {
    yield put({ type: 'DEVICE_PATCH_FAILED', payload: e.message })
  }
}

function* postDevice(action) {
  try {
    yield call(Api.post, action.payload.device)
    yield put({ type: 'DEVICE_POST_SUCCEEDED' })
  } catch (e) {
    yield put({ type: 'DEVICE_POST_FAILED', payload: e.message })
  }
}

export default function* deviceSaga() {
  yield all([
    takeEvery('DEVICES_FETCH_REQUEST', fetchDevices),
    takeEvery('DEVICE_DELETE_REQUEST', deleteDevice),
    takeEvery('DEVICE_PATCH_REQUEST', patchDevice),
    takeEvery('DEVICE_POST_REQUEST', postDevice),
    takeEvery('*SUCCEEDED', fetchDevices)
  ])
}
