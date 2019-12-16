import { combineReducers } from "redux";
import leaders from "./leaderReducer";
import clicks from "./clicksReducer";

const rootReducer = combineReducers({
  leaders,
  clicks
});

export default rootReducer;
