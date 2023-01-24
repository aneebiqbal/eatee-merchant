import {combineReducers} from 'redux';
import AccountReducer from './AccountReducer';
import ChangePasswordReducer from './ChangePasswordReducer';
import getOrderHistoryReducer from './OrderHistoryReducer';

const rootReducer = combineReducers({
  AccountState: AccountReducer,
  ChangePasswordState: ChangePasswordReducer,
  OrderHistoryState: getOrderHistoryReducer,
});

export default rootReducer;
