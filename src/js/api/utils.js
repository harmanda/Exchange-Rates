
let _headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
};

export function headers() {
  return _headers;
}

export function parseJSON(response) {
  if (response.ok) {
    return response.json();
  }
  return Promise.reject(response);
}
