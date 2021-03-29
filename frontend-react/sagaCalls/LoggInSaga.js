import {takeLatest, call, put} from 'redux-saga/effects'
import {CHECK_IN,loggedIn} from "../actions/action"
import {CheckLogIn} from "../api/apiCalls"

export function* checkInWatcher(){
    yield takeLatest(CHECK_IN,checkInworker);
}

function* checkInworker(action){
    let loge;
    try{
        loge= yield call(CheckLogIn,{action})
        if(loge.length!=0){
            yield put(loggedIn(true))
        }else{
            yield put(loggedIn(false))
        }
    }catch(error){
        console.log(error);
    }
}