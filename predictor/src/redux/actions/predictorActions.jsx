import axios from 'axios';
import { toast } from 'react-toastify';

export const SET_FILTER = 'SET_FILTER';
export const SET_RANK = 'SET_RANK';
export const PREDICT_REQUEST = 'PREDICT_REQUEST';
export const PREDICT_SUCCESS = 'PREDICT_SUCCESS';
export const PREDICT_FAILURE = 'PREDICT_FAILURE';

export const setFilter = (filterType, value) => ({
  type: SET_FILTER,
  payload: { filterType, value },
});

export const setRank = (rank) => ({
  type: SET_RANK,
  payload: rank,
});

export const predict = (rank, filters) => async (dispatch) => {
  dispatch({ type: PREDICT_REQUEST });
  try {
    const response = await axios.post('/api/colleges/predict', {
      rank: parseInt(rank),
      filters,
    });
    dispatch({ type: PREDICT_SUCCESS, payload: response.data });
    toast.success('Prediction successful!');
  } catch (error) {
    console.error('Prediction error:', error);
    console.error('Error response:', error.response);
    console.error('Error message:', error.message);
    
    dispatch({ type: PREDICT_FAILURE, payload: error.message });
    
    if (error.response && error.response.data) {
      toast.error(`Error in prediction: ${error.response.data}`);
    } else if (error.message) {
      toast.error(`Error in prediction: ${error.message}`);
    } else {
      toast.error('An error occurred during prediction. Please try again.');
    }
  }
};