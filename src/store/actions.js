import axios from "axios";
import { ADD_ROW, DELETE_ROW, EDIT_ROW, STORE_DATA } from "./action_types";

export const storeData = () => async (dispatch) => {
  try {
    let data = await axios.get("https://api.publicapis.org/entries");
    dispatch({
      type: STORE_DATA,
      payload : data.data.entries,
    });
  } catch (e) {
    console.log(e);
  }
};
export const deleteRow = (index) => async (dispatch) => {
  try {
    dispatch({
      type: DELETE_ROW,
      payload : index,
    });
  } catch (e) {
    console.log(e);
  }
};

export const addRow = (payload) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_ROW,
      payload : payload,
    });
  } catch (e) {
    console.log(e);
  }
};

export const editRow = (payload) => async (dispatch) => {
  try {
    dispatch({
      type: EDIT_ROW,
      payload : payload.data,
      index: payload.index
    });
  } catch (e) {
    console.log(e);
  }
};
