import axios from 'axios';

export const FETCH_OPTIONS_REQUEST = 'FETCH_OPTIONS_REQUEST';
export const FETCH_OPTIONS_SUCCESS = 'FETCH_OPTIONS_SUCCESS';
export const FETCH_OPTIONS_FAILURE = 'FETCH_OPTIONS_FAILURE';

export const fetchOptions = () => async (dispatch) => {
  dispatch({ type: FETCH_OPTIONS_REQUEST });
  try {
    const [instituteTypesRes, instituteNamesRes, branchesRes] = await Promise.all([
      axios.get('/api/colleges/institute-types'),
      axios.get('/api/colleges/institute-names'),
      axios.get('/api/colleges/branches'),
    ]);

    dispatch({
      type: FETCH_OPTIONS_SUCCESS,
      payload: {
        instituteTypes: instituteTypesRes.data,
        instituteNames: instituteNamesRes.data,
        branches: branchesRes.data,
      },
    });
  } catch (error) {
    dispatch({ type: FETCH_OPTIONS_FAILURE, payload: error.message });
  }
};