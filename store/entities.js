import { combineReducers } from "redux";
import designReducer from "./design";

export default combineReducers({
  design: designReducer,
});
