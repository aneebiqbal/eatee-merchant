import {
    GET_ITEM_LOADING,
    GET_ITEM_SUCCESS,
    GET_ITEM_FAILURE,
    GET_ITEM_RESET_STATE,
  } from '../constants/action-types';

  import {getFunctionWithAuthToken} from '../api';
  import {baseUrl} from '../config';
  
  export const getItemLoading = () => {
    return {
      type: GET_ITEM_LOADING,
    };
  };
  
  export const getItemFailure = () => {
    return {
      type: GET_ITEM_FAILURE,
    };
  };
  
  export const getItemSuccess = data => {
    return {
      type: GET_ITEM_SUCCESS,
      payload: data,
    };
  };
  
  export const getItemResetStates = () => {
    return {
      type: GET_ITEM_RESET_STATE,
    };
  };
  
  export const getItems = (token, merchantId) => {
    return dispatch => {
      dispatch(getItemLoading());
      getFunctionWithAuthToken(
        `${baseUrl}/Item/GetItems?mercahntId=${merchantId}`,
        null,
        token,
      )
        .then(data => {
          if (data.status === 200) {
            console.log(data);
            dispatch(getItemSuccess(data.data.result));
          } else {
            console.log(data);
            dispatch(
              getItemFailure(
                'Unable to fetch Items please try again later',
              ),
            );
          }
        })
        .catch(err => {
          console.log(err);
          dispatch(
            getItemFailure(
              'Unable to fetch Items please try again later',
            ),
          );
        });
    };
  };