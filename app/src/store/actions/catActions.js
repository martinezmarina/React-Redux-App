import axios from 'axios';
// thunks

export const FETCH_CAT_FAILURE = 'FETCH_CAT_FAILURE';

// Redux is synchronous
// we need to perform an async operation
export const fetchCat = () => {
  return dispatch => {
    dispatch({ type: 'FETCH_CAT_START' });
    axios
      .get('https://aws.random.cat/meow')
      .then(res => {
        // res.data.quote
        dispatch({ type: 'FETCH_CAT_SUCCESS', payload: res.data.file });
      })
      .catch(err => {
        // message: err.response.data
        // status: err.response.status
        dispatch({
          type: 'FETCH_CAT_FAILURE',
          payload: `Error`
        });
      });
  };
};

export const updateTitle = newTitle => {
  return {};
};
