import {
  testDataBookings,
  testDataGetBooking,
  filterBookingsByStatus,
  searchAllBookings,
} from './test_data';
let token = 'TESTDATATOKEN';

const login = (email, password) => {
  return new Promise(resolve => resolve(token));
};

const authenticate = token => {
  return new Promise(resolve => resolve(true));
};

const getAllBookings = params => {
  return new Promise(resolve => resolve(testDataBookings));
};

const getBooking = order => {
  return new Promise(resolve => resolve(testDataGetBooking(order)));
};

const filterBookings = status => {
  return new Promise(resolve => resolve(filterBookingsByStatus(status)));
};

const searchBookings = search => {
  return new Promise(resolve => resolve(searchAllBookings(search)));
};

export default {
  login,
  authenticate,
  getAllBookings,
  getBooking,
  filterBookings,
  searchBookings,
};
