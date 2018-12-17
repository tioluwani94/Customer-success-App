import React from 'react';
import { storiesOf } from '@storybook/react';
import { TableRow, TableList } from '../components/List';

const components = storiesOf('Components', module);

components.add('ListItem', () => (
  <TableRow data={['Tioluwani', 'Kolawole', 5, 'ongoing', 0]} style={[]} />
));
components.add('Table list', () => (
  <TableList
    columns={['Client', 'Tutor', 'Sessions', 'status', 'date']}
    data={[
      {
        client: 'kolawoleandsons.tioluwani@gmail.com',
        tutor: 'james.sowore@gmail.com',
        sessions: 16,
        status: 'Ongoing',
        date: 'March 13, 2018',
      },
    ]}
  />
));
