import { storage } from "../core/utilities";

const defaultState = {
  colState: {},
  rowState: {},
};

export const initialState = storage("excel-state")
  ? storage("excel-state")
  : defaultState;
