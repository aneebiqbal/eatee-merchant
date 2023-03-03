import {
    ADDRESS_LOADING,
    ADDRESS_FAILURE,
    ADDRESS_SUCCESS,
    ADDRESS_RESET_STATE,
  } from '../constants/action-types';
  
  import Status from '../constants/status';
  
  const initialState = {
    addresses: [],
    addressesStatus: Status.DEFAULT,
  };
  
  export default function getAddressesReducer(
    state = initialState,
    {type, payload},
  ) {
    switch (type) {
      case ADDRESS_LOADING:
        return {
          ...state,
          addressesStatus: Status.LOADING,
        };
      case ADDRESS_SUCCESS:
        return {
          addresses: payload,
          addressesStatus: Status.SUCCESS,
        };
      case ADDRESS_FAILURE:
        return {
          ...state,
          addressesStatus: Status.FAILURE,
        };
      case ADDRESS_RESET_STATE:
        return initialState;
      default:
        return state;
    }
  }
  