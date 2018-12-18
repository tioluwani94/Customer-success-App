import React from "react";
import { Route, Redirect } from "react-router";
import { DataContext } from "../DataProvider";
import { HomePageSpinner } from "./primitives/Spinner";

export class ProtectedRoute extends React.Component {
  static contextType = DataContext;
  state = {
    authenticated: null
  };
  componentDidMount() {
    this.isAuthenticated();
  }
  isAuthenticated() {
    let { dispatch, actions } = this.context;
    let exists = dispatch({ type: actions.TOKEN_EXIST });
    console.log(exists)
    this.setState({ authenticated: exists });
    return dispatch({ type: actions.AUTHENTICATE })
      .then(data => {
        this.setState({ authenticated: data });
      })
      .catch(error => {
        this.setState({ autthenticated: false });
      });
  }
  render() {
    let { authenticated } = this.state;
    if (authenticated === null) {
      return <HomePageSpinner />;
    }
    if (authenticated === false) {
      return <Redirect to="/login" />;
    }
    return <Route {...this.props} />;
  }
}

export default ProtectedRoute;
