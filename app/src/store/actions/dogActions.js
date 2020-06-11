import axios from 'axios';
// thunks

export const FETCH_DOG_FAILURE = 'FETCH_DOG_FAILURE';

// Redux is synchronous
// we need to perform an async operation
export const fetchDog = () => {
  return dispatch => {
    dispatch({ type: 'FETCH_DOG_START' });
    axios
      .get('https://random.dog/woof.json')
      .then(res => {
        // res.data.quote
        dispatch({ type: 'FETCH_DOG_SUCCESS', payload: res.data.url });
      })
      .catch(err => {
        // message: err.response.data
        // status: err.response.status
        dispatch({
          type: 'FETCH_DOG_FAILURE',
          payload: `Error`
        });
      });
  };
};

export const updateTitle = newTitle => {
  return {};
};
