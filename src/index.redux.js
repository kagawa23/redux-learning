// reducer
const ADD_GUN = "家机关枪";
const REMOVE_GUN = "减机关枪";

export function counter(state=0,action){
    switch(action.type){
        case ADD_GUN:
            return state + 1;
        case REMOVE_GUN:
            return state -1;
        default:
        return 10
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