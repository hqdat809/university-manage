import { ETestActions } from "./constants";
import { TTestAction } from "./types";

export const testAction = (): TTestAction => ({
  type: ETestActions.TEST,
});

export const testRequestAction = () => ({
  type: ETestActions.TEST_REQUEST,
});

export const testSuccessAction = (payload: any) => ({
  type: ETestActions.TEST_SUCCESS,
  payload,
});

export const testFailureAction = (error: any) => ({
  type: ETestActions.TEST_FAILURE,
  payload: error,
});
