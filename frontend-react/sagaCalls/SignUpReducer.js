import {takeLatest, call, put} from 'redux-saga/effects';
import {SIGN_UP} from "../actions/action"
import {SignUp} from "../api/apiCalls"



export function* signUpWatcher(){
    yield takeLatest(SIGN_UP,SignUpWorker)
}

function* SignUpWorker(action){
    try{
        const dat=action.payload;
        const signup=yield call(SignUp,dat)
    }catch(error){
        console.log(error);
    }
}
