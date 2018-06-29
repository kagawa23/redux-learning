import {LOGIN,LOGOUT,FETCH_USER_SUCCESS,GET_USER_REQUEST} from './constants'

export function auth(state={isAuth:false,user:"李云龙"},{type,payload}){
    switch(type){
        case LOGIN:
            return {...state,isAuth:true};
        case LOGOUT:
            return {...state,isAuth:false};
        case FETCH_USER_SUCCESS:
            return { ...state, user:payload.data.user}
        default:
            return state;
    }
}


export const  LoginAction = ()=>({'type':LOGIN});

export const LogOutAction = () => ({'type':LOGOUT})

export const FetchUserAction = (data) => ({'type':FETCH_USER_SUCCESS,payload:data})

export const FetchUserRequest = (data) => ({'type':GET_USER_REQUEST})