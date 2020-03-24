import { headers, parseJSON } from './utils';

export function getLatestExchangeRates() {
  const options = {
    headers: headers(),
    method: 'GET',    
  };

  return fetch('/api/latestExchangeData', options)
    .then(parseJSON);
}
