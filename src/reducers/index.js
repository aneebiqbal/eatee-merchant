import {combineReducers} from 'redux';
import AccountReducer from './AccountReducer';
import ChangePasswordReducer from './ChangePasswordReducer';
import getOrderHistoryReducer from './OrderHistoryReducer';
import changeOrderStatusReducer from './OrderTrackingReducer';

const rootReducer = combineReducers({
  AccountState: AccountReducer,
  ChangePasswordState: ChangePasswordReducer,
  OrderHistoryState: getOrderHistoryReducer,
  ChangeOrderStatusState: changeOrderStatusReducer,
});

export default rootReducer;
