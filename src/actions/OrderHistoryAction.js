import {
    ORDER_HISTORY_FAILURE,
    ORDER_HISTORY_LOADING,
    ORDER_HISTORY_SUCCESS,
    ORDER_HISTORY_RESET_STATE,
  } from '../constants/action-types';

  import {getFunctionWithAuthToken} from '../api';
  import {baseUrl} from '../config';
  
  export const orderHistoryLoading = () => {
    return {
      type: ORDER_HISTORY_LOADING,
    };
  };
  
  export const orderHistoryFailure = () => {
    return {
      type: ORDER_HISTORY_FAILURE,
    };
  };
  
  export const orderHistorySuccess = data => {
    return {
      type: ORDER_HISTORY_SUCCESS,
      payload: data,
    };
  };
  
  export const orderHistoryResetStates = () => {
    return {
      type: ORDER_HISTORY_RESET_STATE,
    };
  };
  
  export const fetchOrderHistory = (token, body) => {
    return dispatch => {
      dispatch(orderHistoryLoading());
      getFunctionWithAuthToken(
        `${baseUrl}/Order/GetMerchantOrderHistory?SearchText=${body.searchText??''}&OrderStatusTypeId=${body.orderStatusTypeId}&page=${body.page}&Limit=${body.limit}&TotalCount=${body.totalCount}`,
        null,
        token,
      )
        .then(data => {
          if (data.status === 200) {
            console.log(data);
            dispatch(orderHistorySuccess(data.data.result));
          } else {
            console.log(data);
            dispatch(
              orderHistoryFailure(
                'Unable to fetch Order History please try again later',
              ),
            );
          }
        })
        .catch(err => {
          console.log(err);
          dispatch(
            orderHistoryFailure(
              'Unable to fetch Order History please try again later',
            ),
          );
        });
    };
  };