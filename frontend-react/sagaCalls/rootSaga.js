import {call,all} from 'redux-saga/effect'
import {checkInWatcher} from "./LoggInSaga"
import {signUpWatcher} from  "./SignUpReducer"

export function*rootSaga(){
    yield all([
        call(checkInWatcher),
        call(signUpWatcher)
    ]);
}