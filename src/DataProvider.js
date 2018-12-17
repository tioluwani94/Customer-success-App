import React from 'react';
import { loadState, saveState } from './localStorage';

export const DataContext = React.createContext({
  state: {},
  dispatch: () => {},
  actions: {},
});

const actions = {
  AUTHENTICATE: 'AUTHENTICATE',
  TOKEN_EXIST: 'TOKEN_EXIST',
  LOGIN_USER: 'LOGIN_USER',
  GET_BOOKINGS: 'GET_BOOKINGS',
  GET_BOOKING: 'GET_BOOKING',
};

export class DataProvider extends React.Component {
  dispatch = action => {
    let options = {
      [actions.TOKEN_EXIST]: this.tokenExist,
      [actions.AUTHENTICATE]: this.authenticateUser,
      [actions.LOGIN_USER]: this.loginUser,
      [actions.GET_BOOKINGS]: this.fetchBookings,
    };
    if (this.props.test) {
      console.log(action);
    }
    return options[action.type](action.value);
  };
  state = {
    context: {
      state: {
        auth: false,
        bookings: [],
        booking: {},
      },
      dispatch: this.dispatch,
      actions,
    },
  };
  getAdapter() {
    return this.props.adapter;
  }
  componentDidMount() {
    this.fetchBookings();
  }
  updateState = obj => {
    let { context } = this.state;
    this.setState({
      context: { ...context, state: { ...context.state, ...obj } },
    });
  };
  getToken() {
    let data = loadState();
    if (Boolean(data)) {
      return data.token;
    }
    return undefined;
  }
  tokenExist = () => {
    return Boolean(this.getToken());
  };
  authenticateUser = () => {
    let { auth } = this.state.context.state;
    if (auth) {
      return new Promise(resolve => resolve(true));
    }
    return this.props.authenticateUser(this.getToken()).then(data => {
      this.updateState({ auth: data });
      return true;
    });
  };
  loginUser = ({ email, password }) => {
    return this.getAdapter()
      .login(email, password)
      .then(data => {
        saveState({ token: data });
        this.updateState({ auth: true });
      });
  };
  fetchBookings = refresh => {
    let { bookings } = this.state.context.state;
    if (!Boolean(refresh) && bookings.length > 0) {
      return new Promise(resolve => resolve(bookings));
    }
    return this.getAdapter()
      .getAllBookings()
      .then(data => {
        console.log(data);
        this.updateState({ bookings: data });
        return data;
      })
      .catch(err => {
        throw err;
      });
  };
  render() {
    return (
      <DataContext.Provider value={this.state.context}>
        {this.props.children}
      </DataContext.Provider>
    );
  }
}
