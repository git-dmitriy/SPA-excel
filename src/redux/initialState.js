import { defaultStyles } from "../constants";
import { storage } from "../core/utilities";

const defaultState = {
  colState: {},
  rowState: {},
  dataState: {},
  stylesState: {},
  currentText: "",
  currentStyles: defaultStyles,
};

const normalize = (state) => ({
  ...state,
  currentStyle: defaultStyles,
  currentText: "",
});

export const initialState = storage("excel-state")
  ? normalize(storage("excel-state"))
  : defaultState;
