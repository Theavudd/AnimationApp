import {SET_DATA} from '../../utils/actionTypes';
// import {AuthModal, ActionType} from '@corporateFoods/utils/modal';

const AuthReducer = (
  state: any = {
    title: 'Hello World',
  },
  action: any,
) => {
  switch (action.type) {
    case SET_DATA:
      return {...state, ...action.payload};
    default:
      return state;
  }
};
export default AuthReducer;
