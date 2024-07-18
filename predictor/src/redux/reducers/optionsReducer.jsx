import { FETCH_OPTIONS_REQUEST, FETCH_OPTIONS_SUCCESS, FETCH_OPTIONS_FAILURE } from '../actions/optionsActions';

const initialState = {
  loading: true,
  data: {
    instituteTypes: [],
    instituteNames: [],
    branches: [],
  },
  error: null,
};

const optionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_OPTIONS_REQUEST:
      return { ...state, loading: true };
    case FETCH_OPTIONS_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case FETCH_OPTIONS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default optionsReducer;