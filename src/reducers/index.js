import {combineReducers} from 'redux';
import AccountReducer from './AccountReducer';
import ChangePasswordReducer from './ChangePasswordReducer';

const rootReducer = combineReducers({
  AccountState: AccountReducer,
  ChangePasswordState: ChangePasswordReducer,
});

export default rootReducer;
