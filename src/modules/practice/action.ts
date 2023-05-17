import axios from 'axios';
import {SET_DATA} from '../../utils/actionTypes';

export const APICALL = () => {
  return (dispatch: any) => {
    axios.get('https://jsonplaceholder.typicode.com/todos/1').then(res => {
      console.log('res', res);
      dispatch({type: SET_DATA, payload: {title: res.data}});
    });
  };
};
