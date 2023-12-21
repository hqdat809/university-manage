import { ETestActions } from "../actions/test-action/constants";

type TTestState = {
  testData: any;
};

const initialState: TTestState = {
  testData: null,
};

export const testReducer = (
  state = initialState,
  action: { type: string; payload: any }
): TTestState => {
  switch (action.type) {
    case ETestActions.TEST_SUCCESS:
      return {
        ...state,
        testData: action.payload,
      };
    default:
      return state;
  }
};
