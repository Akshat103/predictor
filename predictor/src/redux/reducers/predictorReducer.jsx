import { SET_FILTER, SET_RANK, PREDICT_REQUEST, PREDICT_SUCCESS, PREDICT_FAILURE } from '../actions/predictorActions';

const initialState = {
  filters: {
    InstituteType: undefined,
    InstituteName: undefined,
    Branch: undefined,
    Class: undefined,
    Category: undefined,
    Gender: undefined,
    MPDomicile: undefined,
  },
  rank: '',
  result: [],
  loadingResult: false,
  error: null,
};

const predictorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER:
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.payload.filterType]: action.payload.value,
        },
      };
    case SET_RANK:
      return { ...state, rank: action.payload };
    case PREDICT_REQUEST:
      return { ...state, loadingResult: true };
    case PREDICT_SUCCESS:
      return { ...state, loadingResult: false, result: action.payload };
    case PREDICT_FAILURE:
      return { ...state, loadingResult: false, error: action.payload };
    default:
      return state;
  }
};

export default predictorReducer;