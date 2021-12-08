import { ADD_ROW, DELETE_ROW, EDIT_ROW, STORE_DATA } from "./action_types";

const initialState = {
  all_data: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case STORE_DATA:
      return {
        ...state,
        all_data: action.payload,
      };
    case DELETE_ROW:
      return {
        ...state,
        all_data: [
          ...state.all_data.slice(0, action.payload),
          ...state.all_data.slice(action.payload + 1),
        ],
      };
      case ADD_ROW:
      return {
        ...state,
        all_data: [
          action.payload,
          ...state.all_data
        ],
      };
      case EDIT_ROW:
      return {
        ...state,
        all_data: [
          ...state.all_data.slice(0, action.index),
          action.payload,
          ...state.all_data.slice(action.index + 1),
        ],
      };
    default:
      return state;
  }
};
