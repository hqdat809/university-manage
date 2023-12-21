import { combineReducers } from "redux";
import { testReducer } from "./test-reducer";

const rootReducer = combineReducers({
  test: testReducer,
});

export type TRootState = ReturnType<typeof rootReducer>;

export default rootReducer;
