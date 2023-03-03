import {
    GET_ITEM_LOADING,
    GET_ITEM_SUCCESS,
    GET_ITEM_FAILURE,
    GET_ITEM_RESET_STATE,
  } from '../constants/action-types';

  import {deleteFunctionWithAuthToken, getFunctionWithAuthToken} from '../api';
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

  export const removeItem = async (
    id,
    token,
    setLoading,
    setError,
    onSuccess,
  ) => {
    debugger;
    await setLoading(true);
    await deleteFunctionWithAuthToken(
      `${baseUrl}/Item/DeleteItem?id=${id}`,
      null,
      token,
    )
      .then(data => {
        debugger;
        console.log('data -- ', data);
        if (data.status === 200) {
          if (data) {
            console.log(' --', data.data);
            setLoading(false);
            onSuccess();
          }
        } else {
          setError('Unable to remove Item');
          setLoading(false);
        }
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  };