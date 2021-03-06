import {
  GET_STATS,
  SET_LOADING,
  GET_HELPLINE,
  GET_DAILY_DATA
} from "../types.js";

export default (state, action) => {
  switch (action.type) {
    case GET_STATS:
      console.log(action.payload)
      return {
        ...state,
        data: action.payload.statewise[0],
        statewise: action.payload.statewise,
        loading: false
      };
    case GET_HELPLINE:
      return {
        ...state,
        help: action.payload.data.contacts,
        loading: false
      };
    case GET_DAILY_DATA:
      return {
        ...state,
        history: action.payload.data.history,
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return {
        state
      };
  }
};
