/** @jsx jsx */
import React from 'react';
import styled from '@emotion/styled';
import { Card, Flex, Heading, Text, Box } from '@rebass/emotion';
import { jsx, css } from '@emotion/core';
import { formatDate } from '../pages/BookingListView';

export const Panel = styled(Card)`
  padding: 0 16px 16px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 2px;
  background-color: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
`;

export class OutsideClickHandler extends React.Component {
  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  setWrapperRef = node => {
    this.wrapperRef = node;
  };

  handleClickOutside = e => {
    if (this.wrapperRef && !this.wrapperRef.contains(e.target)) {
      this.props.onClickOutside();
    }
  };

  render() {
    return (
      <div
        className="OutsideClickHandler"
        ref={this.setWrapperRef}
        style={this.props.style}
      >
        {this.props.children}
      </div>
    );
  }
}

const AvatarWithPictureStyle = picture => `
  background: url('${picture}');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const Avatar = styled(Box)`
  ${props =>
    props.picture ? AvatarWithPictureStyle(props.picture) : `background: blue`};
  border-radius: 50%;
  width: 60px;
  height: 60px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 24px;
`;

export const EmptyState = ({ children }) => (
  <Flex
    justifyContent="center"
    alignItems="center"
    flexDirection="column"
    my="100px"
  >
    {children}
  </Flex>
);

export const UserDetailSection = ({
  heading,
  name,
  email,
  phone,
  address,
  profilePic,
}) => {
  return (
    <Box
      pb="16px"
      mb="32px"
      css={css`
        border-bottom: 1px solid #e8e8e8;
      `}
    >
      <Heading pb={'32px'}>{heading}</Heading>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
        css={css`
          @media (max-width: 480px) {
            .user-avatar {
              display: none;
            }
          }
        `}
      >
        <Flex alignItems="center">
          {profilePic ? (
            <Avatar picture={profilePic} className="user-avatar" />
          ) : (
            <Avatar className="user-avatar">{name[0]}</Avatar>
          )}
          <Box ml={[0, 2, 3]}>
            <Heading pb="8px" fontSize="20px">
              {name}
            </Heading>
            <Text pb="8px">{email}</Text>
          </Box>
        </Flex>
        <Box>
          <Text pb="8px">{phone}</Text>
          <Text pb="8px">{address}</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export const RatingComponent = ({ rating, color }) => {
  const array = Array.from(Array(Math.round(rating)), (x, i) => i + 1);
  return array.map((value, index) => (
    <span style={{ color: color }} key={index.toString()}>
      &#9733;
    </span>
  ));
};
RatingComponent.defaultProps = {
  color: '#fad072',
};

export const Review = ({ tutor, commenter, review, date, score }) => (
  <Box
    mb="32px"
    pb="16px"
    css={css`
      border-bottom: 1px solid #e8e8e8;
    `}
  >
    <Flex alignItems="center" pb="4px">
      <Text pr="8px">{commenter}</Text>
      <RatingComponent rating={score} />
    </Flex>
    <Text
      fontSize="14px"
      css={css`
        color: rgba(0, 0, 0, 0.6);
      `}
    >
      {formatDate(date)}
    </Text>
    <Text
      mt="16px"
      lineHeight={2}
      css={css`
        color: rgba(0, 0, 0, 0.8);
      `}
    >
      {review}
    </Text>
  </Box>
);
