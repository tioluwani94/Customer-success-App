import axios from 'axios';

let baseUrl = 'http://localhost:3000';
const instance = axios.create({
  baseURL: baseUrl,
});

const errorCallback = error => {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    throw error.response;
  } else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    throw 'No response from server';
    console.log(error.request);
  } else {
    // Something happened in setting up the request that triggered an Error
    throw error.message;
  }
};

const login = async (email, password) => {
  const payload = { email, password };
  try {
    const response = await instance.post('/login', payload);
    return response.data;
  } catch (error) {
    return errorCallback(error);
  }
};

const authenticate = async token => {
  try {
    const response = await instance.post('/authenticate', { token });
    return response.data;
  } catch (error) {
    return errorCallback(error);
  }
};

const getAllWithdrawals = async () => {
  try {
    const response = await instance.get('/withdrawals');
    return response.data;
  } catch (error) {
    return errorCallback(error);
  }
};

export default { login, authenticate, getAllWithdrawals };
