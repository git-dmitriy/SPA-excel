import { storage } from "../core/utilities";

const defaultState = {
  colState: {},
  rowState: {},
  dataState: {},
  currentText: "",
};

export const initialState = storage("excel-state")
  ? storage("excel-state")
  : defaultState;
