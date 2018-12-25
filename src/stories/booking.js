import React from 'react';
import { storiesOf } from '@storybook/react';
import { MemoryRouter as Router, Switch, Route } from 'react-router';
import devAdapter from '../adapters/dev';
import { DataContext, DataProvider } from '../DataProvider';
import ProtectedRoute from '../shared/ProtectedRoutes';
import { LoginPage } from '../shared/LoginPage';
import { BookingListView } from '../pages/BookingListView';
import { BookingDetailView } from '../pages/BookingDetailView';

const WithRouter = ({ children, initialIndex = 0, test = true }) => {
  return (
    <DataProvider
      test={test}
      // adapter={testServerAdapter}
      adapter={devAdapter}
      authenticateUser={token => new Promise(resolve => resolve(true))}
    >
      <Router
        initialEntries={['/login', '/bookings', '/bookings/:order']}
        initialIndex={initialIndex}
      >
        <Switch>
          <Route
            path="/login"
            render={props => {
              return (
                <DataContext.Consumer>
                  {({ dispatch, actions }) => {
                    return (
                      <LoginPage
                        login={props =>
                          dispatch({ type: actions.LOGIN_USER, value: props })
                        }
                        toNextPage={() => {
                          props.history.push('/bookings');
                        }}
                      />
                    );
                  }}
                </DataContext.Consumer>
              );
            }}
          />
          {children}
        </Switch>
      </Router>
    </DataProvider>
  );
};

const bookings = storiesOf('Bookings', module);

bookings.add('Booking List View', () => (
  <WithRouter initialIndex={1}>
    <Route
      path="/bookings"
      exact
      render={props => {
        return <BookingListView {...props} />;
      }}
    />
    <Route exact path="/bookings/:order" render={() => <BookingDetailView />} />
  </WithRouter>
));

bookings.add('Booking Detail View', () => (
  <WithRouter initialIndex={1}>
    <Route
      path="/bookings"
      exact
      render={props => {
        return (
          <BookingDetailView
            {...props}
            data={{
              tutor: {
                name: 'Tioluwani Kolawole',
                email: 'kolawole8tiolu@gmail.com',
                phone: '+2348078657912',
                address: '37 Alara Street, Onike, Lagos',
              },
              client: {
                name: 'Tioluwani Kolawole',
                email: 'kolawole8tiolu@gmail.com',
                phone: '+2348078657912',
                address: '37 Alara Street, Onike, Lagos',
              },
              sessions: [
                {
                  booking_order: 'ABCXYZ65',
                  price: 4000,
                  no_of_hours: 5,
                  date: 1545045658609,
                  status: 'completed',
                },
                {
                  booking_order: 'ABCXYZ65',
                  price: 4000,
                  no_of_hours: 5,
                  date: 1545045658609,
                  status: 'completed',
                },
                {
                  booking_order: 'ABCXYZ65',
                  price: 4000,
                  no_of_hours: 5,
                  date: 1545045658609,
                  status: 'completed',
                },
              ],
              transactions: [
                {
                  amount: 5000,
                  credit: 0,
                  type: 'tutor payout',
                  transaction_type: 'card',
                },
                {
                  amount: 2500,
                  credit: 0,
                  type: 'tutor payout',
                  transaction_type: 'card',
                },
                {
                  amount: 3000,
                  credit: 0,
                  type: 'tutor payout',
                  transaction_type: 'card',
                },
              ],
              remarks: [
                {
                  title: 'Closed account',
                  date: 1545045658609,
                  content:
                    'Lorem Khaled Ipsum is a major key to success. Find peace, life is like a water fall, you’ve gotta flow.',
                },
                {
                  title: 'Closed account',
                  date: 1545045658609,
                  content:
                    'Lorem Khaled Ipsum is a major key to success. Find peace, life is like a water fall, you’ve gotta flow.',
                },
                {
                  title: 'Closed account',
                  date: 1545045658609,
                  content:
                    'Lorem Khaled Ipsum is a major key to success. Find peace, life is like a water fall, you’ve gotta flow.',
                },
                {
                  title: 'Closed account',
                  date: 1545045658609,
                  content:
                    'Lorem Khaled Ipsum is a major key to success. Find peace, life is like a water fall, you’ve gotta flow.',
                },
              ],
              reviews: [
                {
                  tutor: 'james.sowore@gmail.com',
                  commenter: 'kolawole8tiolu@gmial.com',
                  review:
                    'Lorem Khaled Ipsum is a major key to success. To succeed you must believe. When you believe, you will succeed. Give thanks to the most high. Surround yourself with angels. I’m giving you cloth talk, cloth. Special cloth alert, cut from a special cloth. Give thanks to the most high. Let’s see what Chef Dee got that they don’t want us to eat. Another one. Bless up. In life you have to take the trash out, if you have trash in your life, take it out, throw it away, get rid of it, major key. We don’t see them, we will never see them',
                  date: 1545045658609,
                  score: 5,
                },
              ],
            }}
          />
        );
      }}
    />
  </WithRouter>
));
