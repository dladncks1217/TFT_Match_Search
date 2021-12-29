import { all, call, put, fork, takeLatest } from "redux-saga/effects";
import {
  RANK_UPDATE_FAILURE,
  RANK_UPDATE_REQUEST,
  RANK_UPDATE_SUCCESS,
} from "../reducer/rank";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000";

// function* rankUpdateAPI() {
//   return new Promise((resolve, reject) => {
//     axios
//       .get("/apirequest/updatedrank")
//       .then((v) => {
//         console.log(v);
//         resolve(v);
//       })
//       .catch((e) => {
//         reject(e);
//       });
//   });
// }

const rankUpdateAPI = async () => {
  const result = await axios.get("/apirequest/updatedrank");
  return result;
};

function* rankUpdate() {
  try {
    const result = yield call(rankUpdateAPI);
    yield put({
      type: RANK_UPDATE_SUCCESS,
      data: result,
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
