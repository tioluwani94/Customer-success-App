import React from 'react';
import styled from '@emotion/styled';
import { formatDate } from '../pages/BookingListView';

const TimelineListContainer = styled.ul`
  font-variant: tabular-nums;
  line-height: 1.5;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  list-style: none;
  margin: 0;
  padding: 0;

  .timeline {
    &:last-child {
      .timeline__tail {
        display: none;
      }
    }
  }
`;

const TimelineContainer = styled.li`
  position: relative;
  padding: 0 0 20px;
  list-style: none;
  margin: 0;
  .timeline {
    &__tail {
      position: absolute;
      left: 6px;
      top: 0.75em;
      height: 100%;
      border-left: 2px solid #e8e8e8;
    }

    &__head {
      position: absolute;
      width: 10px;
      height: 10px;
      background-color: #fff;
      border-radius: 100px;
      color: #1890ff;
      border: 2px solid #1890ff;
    }

    &__content {
      margin: 0 0 0 18px;
      position: relative;
      color: rgba(0, 0, 0, 0.8);
      top: -4px;
    }

    &__title {
      display: flex;
      align-items: center;
      padding-bottom: 6px;
      font-weight: bold;
      font-size: 16px;
      color: black;

      span.date {
        font-size: 14px;
        font-weight: normal;
        padding-left: 12px;
      }
    }
  }
`;

const Timeline = ({ content, title, date }) => (
  <TimelineContainer className="timeline">
    <div className="timeline__tail" />
    <div className="timeline__head" />
    {title && (
      <div className="timeline__content timeline__title">
        {title} {date && <span className="date">{formatDate(date)}</span>}
      </div>
    )}
    <div className="timeline__content">{content}</div>
  </TimelineContainer>
);

export function TimelineList({ timelines }) {
  return (
    <TimelineListContainer>
      {timelines.map((timeline, i) => (
        <Timeline {...timeline} key={i.toString()} />
      ))}
    </TimelineListContainer>
  );
}
