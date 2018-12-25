/** @jsx jsx */
import React, { Component } from 'react';
import styled from '@emotion/styled';
import { css, jsx } from '@emotion/core';
import { Box, Heading, Button } from '@rebass/emotion';
import {
  UserDetailSection,
  Panel,
  EmptyState,
  Review,
} from '../shared/reuseable';
import { TableList } from '../components/List';
import { formatDate } from './BookingListView';
import { TextArea } from '../shared/primitives/TextArea';
import { TimelineList } from '../components/Timeline';

const SESSION_TABLE_COLUMNS = [
  'Order',
  'Price',
  'No of Hours',
  'Date',
  'Status',
];

const TRANSACTION_TABLE_COLUMNS = [
  'Amount (N)',
  'Credit (N)',
  'Type',
  'Transaction Type',
];

const SESSION_TABLE_CONFIG = [
  { width: '20%', hideAt: '840px' },
  { width: '20%' },
  { width: '20%' },
  { width: '20%', hideAt: '700px' },
  { width: '20%', isCapitalized: true },
];

const TRANSACTION_TABLE_CONFIG = [
  { width: '25%' },
  { width: '25%' },
  { width: '25%', isCapitalized: true, hideAt: '400px' },
  { width: '25%', isCapitalized: true, hideAt: '670px' },
];

const DetailViewSection = ({ heading, children, ...rest }) => {
  return (
    <Box
      pb="32px"
      mb="32px"
      {...rest}
      css={css`
        border-bottom: 1px solid #e8e8e8;
      `}
    >
      <Heading mb="32px">{heading}</Heading>
      {children}
    </Box>
  );
};

export class BookingDetailView extends Component {
  state = {
    remark: '',
  };
  formatDataDate = array => {
    return array.map(item => ({
      ...item,
      date: formatDate(item.date),
    }));
  };
  submitRemark = e => {
    e.preventDefault();
    console.log(this.state.remark);
  };
  onChange = e => {
    this.setState({
      remark: e.target.value,
    });
  };
  render() {
    const {
      tutor,
      client,
      sessions,
      transactions,
      reviews,
      remarks,
    } = this.props.data;
    let formattedSessions = this.formatDataDate(sessions);
    return (
      <Box px={[3, 4]}>
        <UserDetailSection heading="Client Information" {...client} />
        <UserDetailSection heading="Tutor Information" {...tutor} />
        <DetailViewSection heading="Sessions">
          {formattedSessions.length > 0 ? (
            <Panel>
              <TableList
                columns={SESSION_TABLE_COLUMNS}
                data={formattedSessions}
                style={SESSION_TABLE_CONFIG}
              />
            </Panel>
          ) : (
            <EmptyState>
              <Heading>No Sessions</Heading>
            </EmptyState>
          )}
        </DetailViewSection>
        <DetailViewSection heading="Transactions">
          {transactions.length > 0 ? (
            <Panel>
              <TableList
                columns={TRANSACTION_TABLE_COLUMNS}
                data={transactions}
                style={TRANSACTION_TABLE_CONFIG}
              />
            </Panel>
          ) : (
            <EmptyState>
              <Heading>No Transactions</Heading>
            </EmptyState>
          )}
        </DetailViewSection>
        <DetailViewSection heading="Reviews">
          {reviews.length > 0 ? (
            reviews.map((review, i) => (
              <Review {...review} key={i.toString()} />
            ))
          ) : (
            <EmptyState>
              <Heading>No Reviews</Heading>
            </EmptyState>
          )}
        </DetailViewSection>
        <DetailViewSection heading="Remarks">
          <form onSubmit={this.submitRemark}>
            <TextArea
              rows={10}
              placeholder="Give a remark"
              onChange={this.onChange}
            />
            <Button type="submit" mt="16px">
              Submit Remark
            </Button>
          </form>
          <Box mt="32px">{remarks && <TimelineList timelines={remarks} />}</Box>
        </DetailViewSection>
      </Box>
    );
  }
}
