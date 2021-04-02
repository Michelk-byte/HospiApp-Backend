import { takeLatest, call, put } from "redux-saga/effects";
import { CHECK_IN, loggedIn, datain } from "../actions/action";
import { CheckLogIn } from "../api/apiCalls";
import { setCookie } from "../cookies";

export function* checkInWatcher() {
  yield takeLatest(CHECK_IN, checkInworker);
}

function* checkInworker(action) {
  let loge;
  try {
    loge = yield call(CheckLogIn, { action });

    if (loge.status === 200) {
      setCookie("sid", loge._id, 1);
      yield put(loggedIn(true));
      yield put(datain(loge));
    } else {
      console.log(loge.error);
    }
  } catch (error) {
    console.log(error);
  }
}
