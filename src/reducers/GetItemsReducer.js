import {
  GET_ITEM_LOADING,
  GET_ITEM_SUCCESS,
  GET_ITEM_FAILURE,
  GET_ITEM_RESET_STATE,
} from '../constants/action-types';

import Status from '../constants/status';

const initialState = {
  items: [],
  itemsStatus: Status.DEFAULT,
};

export default function getItemReducer(
  state = initialState,
  {type, payload},
) {
  switch (type) {
    case GET_ITEM_LOADING:
      return {
        ...state,
        itemsStatus: Status.LOADING,
      };
    case GET_ITEM_SUCCESS:
      return {
        // ...state,
        items: payload,
        itemsStatus: Status.SUCCESS,
      };
    case GET_ITEM_FAILURE:
      return {
        ...state,
        itemsStatus: Status.FAILURE,
      };
    case GET_ITEM_RESET_STATE:
      return initialState;
    default:
      return state;
  }
}