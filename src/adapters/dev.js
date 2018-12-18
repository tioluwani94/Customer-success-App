import { testDataBookings } from './test_data';
let token = 'TESTDATATOKEN';

const login = (email, password) => {
  return new Promise(resolve => resolve(token));
};

const authenticate = token => {
  return new Promise(resolve => resolve(true));
};

const getAllBookings = (params) => {
  return new Promise(resolve => setTimeout(resolve, 3000, testDataBookings));
};

export default {
  login,
  authenticate,
  getAllBookings,
};
