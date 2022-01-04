import { combineReducers } from "redux";
import rankSlice from "./rankSlice";

export default combineReducers({
  rank: rankSlice.reducer,
});
