import axios from 'axios';
import {API} from '../../utils/API';

export const getMovies = (
  page: number,
  successCallback: (arg: any) => void,
  failureCallback: (arg: any) => void,
) => {
  axios
    .get(`${API.getMovies}&page=${page}`)
    .then(res => {
      if (res.status == 200) {
        successCallback(res);
      }
    })
    .catch(err => {
      failureCallback(err);
    });
};
