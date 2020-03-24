import { GET_EXCHANGE_DATA_SUCCESS } from '../actions';
import { getLatestExchangeRates } from '../api/home';

export function loadHome() {
  return dispatch => (
    getLatestExchangeRates()
      .then((payload) => {
        dispatch({ type: GET_EXCHANGE_DATA_SUCCESS, payload });   
      })      
  );
}
