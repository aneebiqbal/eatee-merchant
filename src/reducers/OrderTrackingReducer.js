import {
    ORDER_STATUS_SUCCESS,
    ORDER_STATUS_FAILURE
  } from '../constants/action-types';

  import Status from '../constants/status';

  const initialState = {
    orders: [],
    ordersStatus: Status.DEFAULT,
  };

  export default function changeOrderStatusReducer(
    state = initialState,
    {type, payload},
  ) {
    switch (type) {
      case ORDER_STATUS_SUCCESS:
        return {
          orders:
            payload.currentPage === 1
              ? payload.list
              : [...state.orders, payload.list].flat(1),
          ordersStatus: Status.SUCCESS,
        };
      case ORDER_STATUS_FAILURE:
        return {
          ...state,
          ordersStatus: Status.FAILURE,
        };
      default:
        return state;
    }
  }