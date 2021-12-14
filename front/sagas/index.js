import { all, call } from "redux-saga/effects";
import rank from "./rank";

export default function* rootSaga() {
  yield all([call(rank)]);
}
