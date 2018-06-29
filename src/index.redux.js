

// reducer
import {ADD_GUN,REMOVE_GUN,INCREMENT_ASYNC} from 'constants'

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

