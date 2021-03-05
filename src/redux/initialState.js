import { defaultStyles } from "../constants";
import { storage } from "../core/utilities";

const defaultState = {
  colState: {},
  rowState: {},
  dataState: {},
  currentText: "",
  currentStyles: defaultStyles,
};

export const initialState = storage("excel-state")
  ? storage("excel-state")
  : defaultState;
