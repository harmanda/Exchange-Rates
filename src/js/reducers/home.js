import { GET_EXCHANGE_DATA_SUCCESS } from '../actions';
import { createReducer } from './utils';

const initialState = {
  exchangeData: {}  
};

const handlers = {
  [GET_EXCHANGE_DATA_SUCCESS]: (state, action) =>      
      ({ ...state, exchangeData: action.payload.body }),  
};

export default createReducer(initialState, handlers);
