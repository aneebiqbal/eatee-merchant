import {
    ADDRESS_FAILURE,
    ADDRESS_LOADING,
    ADDRESS_SUCCESS,
    ADDRESS_RESET_STATE,
  } from '../constants/action-types';
  import {getFunctionWithAuthToken} from '../api';
  import {baseUrl} from '../config';
  
  export const addressesLoading = () => {
    return {
      type: ADDRESS_LOADING,
    };
  };
  
  export const addressesFailure = () => {
    return {
      type: ADDRESS_FAILURE,
    };
  };
  
  export const addressesSuccess = data => {
    return {
      type: ADDRESS_SUCCESS,
      payload: data,
    };
  };
  
  export const addressesResetStates = () => {
    return {type: ADDRESS_RESET_STATE};
  };
  
  export const fetchAddresses = token => {
    return dispatch => {
      dispatch(addressesLoading());
  
      getFunctionWithAuthToken(
        `${baseUrl}/Address/GetCustomerAdresses`,
        null,
        token,
      )
        .then(data => {
          if (data.status === 200) {
            console.log(data);
            dispatch(addressesSuccess(data.data.result));
          } else {
            console.log(data);
            dispatch(
              addressesFailure(
                'Unable to fetch addresses please try again later',
              ),
            );
          }
        })
        .catch(err => {
          dispatch(addressesFailure(err));
        });
    };
  };
  