import {delay} from 'redux-saga'
import {call, put, takeEvery} from 'redux-saga/effects';
import {addGUN} from './index.redux';
import { FetchUserAction} from './auth.redux'
import {INCREMENT_ASYNC, GET_USER_REQUEST} from './constants';
import axios from 'axios';

function* addGunAsyncAction() {
    // return (dispatch) => {
    //     setTimeout(() => {
    //         dispatch(addGUN());
    //     }, 2000);
    //}
    yield delay(2000);
    yield put(addGUN());
   // yield put(removeGUN());
}

const fetchUserApi = () => axios.get('http://localhost:9093/data');

function* geUserInfoAsync() {
    try {
        const info = yield fetchUserApi();
        console.log(info);
        yield put(FetchUserAction(info));
    } catch (error) {
        console.log(error);
       // yield put(FetchUserAction(info))
    }
}

export function* rootSaga() {
    yield takeEvery(INCREMENT_ASYNC, addGunAsyncAction)
    yield takeEvery(GET_USER_REQUEST, geUserInfoAsync)
}