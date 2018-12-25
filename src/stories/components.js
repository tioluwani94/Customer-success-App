import React from 'react';
import { storiesOf } from '@storybook/react';
import { TableRow, TableList } from '../components/List';
import SectionHeading from '../components/SectionHeading';
import { UserDetailSection } from '../shared/reuseable';

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
    style={[]}
  />
));
components.add('Section Heading', () => (
  <SectionHeading
    heading="Bookings - 200"
    clientSearch={() => {}}
    serverSearch={() => {}}
  />
));

components.add('User Detail Compnent', () => (
  <UserDetailSection
    {...{
      heading: 'Client Information',
      name: 'Tioluwani Kolawole',
      email: 'kolawole8tiolu@gmail.com',
      phone: '+2348078657912',
      address: '37 Alara Street, Onike, Lagos'
    }}
  />
));
