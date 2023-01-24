import {
    ORDER_HISTORY_LOADING,
    ORDER_HISTORY_FAILURE,
    ORDER_HISTORY_SUCCESS,
    ORDER_HISTORY_RESET_STATE,
  } from '../constants/action-types';
  
  import Status from '../constants/status';
  
  const initialState = {
    orders: [],
    ordersStatus: Status.DEFAULT,
    ordersMeta: null,
  };
  
  export default function getOrderHistoryReducer(
    state = initialState,
    {type, payload},
  ) {
    switch (type) {
      case ORDER_HISTORY_LOADING:
        return {
          ...state,
          ordersStatus: Status.LOADING,
        };
      case ORDER_HISTORY_SUCCESS:
        return {
          orders:
            payload.currentPage === 1
              ? payload.list
              : [...state.orders, payload.list].flat(1),
          ordersStatus: Status.SUCCESS,
          ordersMeta: {
            currentPage: payload.currentPage,
            totalCount: payload.totalCount,
            hasNext: payload.hasNext,
          },
        };
      case ORDER_HISTORY_FAILURE:
        return {
          ...state,
          ordersStatus: Status.FAILURE,
        };
      case ORDER_HISTORY_RESET_STATE:
        return initialState;
      default:
        return state;
    }
  }
  