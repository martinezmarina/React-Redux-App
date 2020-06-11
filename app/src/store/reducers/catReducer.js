const initialState = {
  cat: '',
  isFetching: false,
  error: ''
};

export const catReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_CAT_START':
      return {
        ...state,
        isFetching: true
      };
    case 'FETCH_CAT_SUCCESS':
      return {
        ...state,
        isFetching: false,
        cat: action.payload,
        error: ''
      };
    case 'FETCH_CAT_FAILURE':
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    default:
      return state;
  }
};
