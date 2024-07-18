import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import optionsReducer from './reducers/optionsReducer';
import predictorReducer from './reducers/predictorReducer';

const rootReducer = combineReducers({
  options: optionsReducer,
  predictor: predictorReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;