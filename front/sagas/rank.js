import { all, delay, put, fork, takeLatest } from "redux-saga/effects";
import {
  RANK_UPDATE_FAILURE,
  RANK_UPDATE_REQUEST,
  RANK_UPDATE_SUCCESS,
} from "../reducer/rank";

function* rankUpdateAPI() {
  // axios
}

function* rankUpdate() {
  try {
    yield delay(2000);
    yield put({
      type: RANK_UPDATE_SUCCESS,
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: RANK_UPDATE_FAILURE,
    });
  }
}

function* watchRankUpdate() {
  yield takeLatest(RANK_UPDATE_REQUEST, rankUpdate);
}

export default function* RankSaga() {
  yield all([fork(watchRankUpdate)]);
}
