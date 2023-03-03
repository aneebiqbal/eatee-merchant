import { getFunctionWithAuthToken } from '../api';
import { baseUrl } from '../config';
import {
    NOTIFICATION_SUCCESS,
    NOTIFICATION_FAILURE,
    NOTIFICATION_LOADING,
    NOTIFICATION_RESET_STATE
  } from '../constants/action-types';
  
  
  export const notificationSuccess = data => {
    return {
      type: NOTIFICATION_SUCCESS,
      payload: data,
    };
  };

  export const notificationLoading = () => {
    return {
      type: NOTIFICATION_LOADING,
    };
  };
  
  export const notificationfailure = () => {
    return {
      type: NOTIFICATION_FAILURE,
    };
  };

  export const notificationResetState = () => {
    return {type: NOTIFICATION_RESET_STATE};
  };

  // export const GetNotifications= token => {
  //   debugger;
  //   return dispatch => {
  //     dispatch(notificationLoading());
  //     getFunctionWithAuthToken(
  //       `${baseUrl}/Notification/GetNotification`,
  //       {},
  //       token,
  //     )
  //       .then(data => {
  //         debugger;
  //         console.log('favourite data -- ', data);
  //         if (data.status === 200) {
  //           debugger;
  //           if (data.data?.result) {
  //             console.log('GetUserNotification --', data.data);
  //             dispatch(notificationSuccess(data.data.result));
  //           }
  //         } else {
  //           dispatch(notificationfailure());
  //         }
  //       })
  //       .catch(err => {
  //         console.log('error in getting Notifications : ', err);
  //         dispatch(notificationfailure());
  //       });
  //   };
  // };
  export const GetNotifications = token => {
    return dispatch => {
      dispatch(notificationLoading());
      getFunctionWithAuthToken(
        `${baseUrl}/Notification/GetNotification`,
        {},
        token,
      )
        .then(data => {
          debugger;
          console.log('notification data -- ', data);
          if (data.status === 200) {
            if (data.data?.result) {
              console.log('GetUserNotifications --', data.data);
              dispatch(notificationSuccess(data.data.result));
            }
          } else {
            dispatch(notificationfailure());
          }
        })
        .catch(err => {
          console.log('error in getting user notification : ', err);
          dispatch(notificationfailure());
        });
    };
  };
  