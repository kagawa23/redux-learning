import {delay} from 'redux-saga'
import {call, put, takeEvery} from 'redux-saga/effects';

// reducer
const ADD_GUN = "家机关枪";
const REMOVE_GUN = "减机关枪";
const INCREMENT_ASYNC = "再等一会";

export function counter(state=0,action){
    switch(action.type){
        case ADD_GUN:
            return state + 1;
        case REMOVE_GUN:
            return state -1;
        default:
            return state;
    } 
}

// action creator
export function addGUN(){
    return {type:ADD_GUN};
}

// action creator
export function removeGUN(){
    return {type:REMOVE_GUN};
}

export function addGunAsync(){
    return {type:INCREMENT_ASYNC};
}

// export function addGUNAsyncA(){
//     retrun {type:INCREMENT_ASYNC};
// }

// export function addGunAsync() {
//     return (dispatch) => {
//         setTimeout(() => {
//             dispatch(addGUN());
//         }, 2000);
//     }
// }

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

export function* rootSaga() {
    yield takeEvery(INCREMENT_ASYNC, addGunAsyncAction)
}