import {LOGOUT, RESET_STORE} from '../../utils/actionTypes';
import {combineReducers} from 'redux';
import AuthReducer from '../practice/reducer';

const RootReducer = combineReducers({AuthReducer});
const rootReducer = (state: any, action: any) => {
  if (action.type === RESET_STORE) {
    state = undefined;
    const res = RootReducer(state, action);
    return res;
  }
  if (action.type === LOGOUT) {
    state = {};
    const res = RootReducer(state, action);
    return res;
  }

  return RootReducer(state, action);
};
export default rootReducer;
