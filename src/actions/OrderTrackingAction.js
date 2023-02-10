import {
    ORDER_STATUS_SUCCESS,
    ORDER_STATUS_FAILURE
} from '../constants/action-types';

import {patchFunctionWithAuthToken, postFunctionWithAuthToken} from '../api';
import {baseUrl} from '../config';

export const orderStatusChange = data => {
    return {
      type: ORDER_STATUS_SUCCESS,
      payload: data,
    };
  };
  export const orderStatusChangeFailure = data => {
    return {
      type: ORDER_STATUS_FAILURE,
    };
  };

  export const PostOrderStatus = (token, body) => {
    return dispatch => {
      postFunctionWithAuthToken(
        `${baseUrl}/Order/UpdateOrderTrackingStatus`,
        body,
        token,
      )
        .then(data => {
          debugger;
          if (data.status === 200) {
            console.log(data);
            dispatch(orderStatusChange(data.data.result));
          } else {
            console.log(data);
            dispatch(
                orderStatusChangeFailure(
                'Unable to change Order Status please try again later',
              ),
            );
          }
        })
        .catch(err => {
          debugger;
          console.log(err);
          dispatch(
            orderStatusChangeFailure(
              'Unable to change Order Status please try again later',
            ),
          );
        });
      }
  };