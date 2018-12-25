import React from 'react';
import { storiesOf } from '@storybook/react';
import { TableRow, TableList } from '../components/List';
import SectionHeading from '../components/SectionHeading';
import {
  UserDetailSection,
  RatingComponent,
  Review,
} from '../shared/reuseable';
import { TimelineList } from '../components/Timeline';

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
      address: '37 Alara Street, Onike, Lagos',
    }}
  />
));

components.add('Rating Compnent', () => <RatingComponent rating={5} />);
components.add('Review Compnent', () => (
  <Review
    {...{
      tutor: 'kolawole8tiolu@gmail.com',
      commenter: 'kolawole8tiolu@gmail.com',
      review:
        'Lorem Khaled Ipsum is a major key to success. To succeed you must believe. When you believe, you will succeed. Give thanks to the most high. Surround yourself with angels. I’m giving you cloth talk, cloth. Special cloth alert, cut from a special cloth. Give thanks to the most high. Let’s see what Chef Dee got that they don’t want us to eat. Another one. Bless up. In life you have to take the trash out, if you have trash in your life, take it out, throw it away, get rid of it, major key. We don’t see them, we will never see them',
      date: 1545045658609,
      score: 5,
    }}
  />
));
components.add('Timeline Component', () => (
  <TimelineList
    timelines={[
      {
        title: 'Closed account',
        date: 1545045658609,
        content:
          'Lorem Khaled Ipsum is a major key to success. Find peace, life is like a water fall, you’ve gotta flow.',
      },
      {
        content:
          'Lorem Khaled Ipsum is a major key to success. Find peace, life is like a water fall, you’ve gotta flow.',
      },
      {
        content:
          'Lorem Khaled Ipsum is a major key to success. Find peace, life is like a water fall, you’ve gotta flow.',
      },
      {
        content:
          'Lorem Khaled Ipsum is a major key to success. Find peace, life is like a water fall, you’ve gotta flow.',
      },
      {
        content:
          'Lorem Khaled Ipsum is a major key to success. Find peace, life is like a water fall, you’ve gotta flow.',
      },
    ]}
  />
));
