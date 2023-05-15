import axios from 'axios';

const nowPlaying = (successCallback: any, failureCallback: any) => {
  axios
    .get(
      'https://api.themoviedb.org/3/movie/now_playing?api_key=b1771feb14742109bd7ed4faffd58fa8',
    )
    .then(res => {
      console.log('response', res.status, res);
      if (res.status == 200) {
        successCallback(res);
      }
    })
    .catch(err => {
      console.log('error', err);
      failureCallback(err);
    });
};

const toMovie = () => {
  axios
    .get(
      'https://api.themoviedb.org/3/movie/640146?api_key=b1771feb14742109bd7ed4faffd58fa8&append_to_response=videos,images',
    )
    .then(resp => {
      console.log(resp);
    })
    .catch(error => {
      console.log(error);
    });
};

export default nowPlaying;
