import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects'
import {actions, t} from './actions';
const baseUrl = 'https://api.github.com/users';

function* loadUserData(action) {
    const response = yield axios.get(`${baseUrl}/${action.name}`);
    yield put(actions.loadUserDataSuccess(response.data))
}

export function* watchLoadUserData() {
    yield takeLatest(t.LOAD_USER_DATA, loadUserData)
}
