import React from 'react';
import { TableList } from '../components/List';
import { DataContext } from '../DataProvider';
import { format } from 'date-fns';
import { Panel } from '../shared/reuseable';
import { HomePageSpinner } from '../shared/primitives/Spinner';

const columns = [
  'Client email',
  'Tutor email',
  'Order',
  'Sessions',
  'Status',
  'Date',
];

const formatDate = date => {
  return format(new Date(date), 'MMMM M, GGGG');
};

const TABLE_CONFIG = [
  { width: '30%', isEllipsis: true },
  { width: '30%', hideAt: '620px', isEllipsis: true },
  { width: '10%', hideAt: '370px' },
  { width: '10%', hideAt: '840px' },
  { width: '10%', isCapitalized: true },
  { width: '10%', hideAt: '1006px' },
];

export class BookingListView extends React.Component {
  static contextType = DataContext;
  state = {
    bookings: [],
  };
  componentDidMount() {
    this.fetchBookings();
  }
  fetchBookings = (refresh = false) => {
    let { dispatch, actions } = this.context;
    dispatch({ type: actions.GET_BOOKINGS, value: refresh }).then(data => {
      this.setState({ bookings: this.formatBookingData(data) });
    });
  };
  formatBookingData = bookings => {
    return bookings.map(booking => ({
      client: booking.client.email,
      tutor: booking.tutor.email,
      order: booking.order,
      sessions: booking.sessions.length,
      status: booking.status,
      date: formatDate(booking.createdAt),
    }));
  };
  render() {
    let { bookings } = this.state;
    let { loading } = this.context.state;
    return loading ? (
      <HomePageSpinner/>
    ) : bookings.length > 0 ? (
      <Panel>
        <TableList columns={columns} data={bookings} style={TABLE_CONFIG} />
      </Panel>
    ) : null;
  }
}
