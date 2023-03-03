import {
    NOTIFICATION_SUCCESS,
    NOTIFICATION_FAILURE,
    NOTIFICATION_LOADING,
    NOTIFICATION_RESET_STATE,
    NOTIFICATION_SUCCESS_REAL_TIME
  } from '../constants/action-types';
  
import Status from '../constants/status';
  
  const initialState = {
    notifications: [],
    notificationsStatus: Status.DEFAULT,
  };
  
  export default function getNotificationReducer(
    state = initialState,
    {type, payload},
  ) {
    switch (type) {
      case NOTIFICATION_LOADING:
        return {
          ...state,
          notificationsStatus: Status.LOADING,
        };
      case NOTIFICATION_SUCCESS_REAL_TIME:
        debugger;
        state.notifications.push(payload);
        
      return state;
      case NOTIFICATION_SUCCESS:
        return {
          notifications:payload,
          notificationsStatus: Status.SUCCESS,
        };
      case NOTIFICATION_FAILURE:
        return {
          ...state,
          notificationsStatus: Status.FAILURE,
        };
      case NOTIFICATION_RESET_STATE:
        return initialState;
      default:
        return state;
    }
  }
  