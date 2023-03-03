import {combineReducers} from 'redux';
import AccountReducer from './AccountReducer';
import ChangePasswordReducer from './ChangePasswordReducer';
import getItemReducer from './GetItemsReducer';
import getOrderHistoryReducer from './OrderHistoryReducer';
import changeOrderStatusReducer from './OrderTrackingReducer';
import NotificationReducer from './NotificationReducer';
import getAddressesReducer from './AddressesReducer';

const rootReducer = combineReducers({
  AccountState: AccountReducer,
  ChangePasswordState: ChangePasswordReducer,
  OrderHistoryState: getOrderHistoryReducer,
  ChangeOrderStatusState: changeOrderStatusReducer,
  GetItemState: getItemReducer,
  NotificationState: NotificationReducer,
  AddressesState: getAddressesReducer,
})

export default rootReducer;
