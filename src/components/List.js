/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import React from 'react';
import { Box, Flex, Button, Text, Link } from '@rebass/emotion';

export const Table = ({ columns, data }) => {
  return (
    <table>
      <thead>
        <td>
          {columns.map((item, i) => (
            <th key={i.toString()}>{item}</th>
          ))}
          <th />
        </td>
      </thead>
      <tbody>
        {data.map(item => {
          return (
            <td>
              <tr>{item}</tr>
            </td>
          );
        })}
      </tbody>
    </table>
  );
};

const ListItemCell = styled(Box)`
  flex: ${props => props.width};
  padding-right: 16px;
  ${props =>
    props.isEllipsis
      ? `
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;`
      : ``}

  @media (max-width: ${props => props.hideAt}) {
    display: none;
  }
`;

const TABLE_CONFIG = [
  { width: '30%', isEllipsis: true },
  { width: '30%', hideAt: '620px', isEllipsis: true },
  { width: '10%', hideAt: '840px' },
  { width: '10%' },
  { width: '20%', hideAt: '960px' },
];

export const TableRow = ({ data, isHeader, style }) => {
  let columnStyle = isHeader
    ? {
        textTransform: 'capitalize',
        fontWeight: 'bold',
      }
    : {};
  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      flexWrap="wrap"
      css={css`
        border-bottom: 1px solid #e8e8e8;
      `}
      px="8px"
      py="16px"
    >
      {data.map((item, i) => (
        <ListItemCell key={i.toString()} css={columnStyle} {...style[i]}>
          {item}
        </ListItemCell>
      ))}
    </Flex>
  );
};

export const TableList = ({ data, columns }) => {
  return (
    <React.Fragment>
      <TableRow data={columns} isHeader style={TABLE_CONFIG} />
      {data.map((item, i) => {
        let itemValues = Object.values(item);
        return <TableRow data={itemValues} style={TABLE_CONFIG} />;
      })}
    </React.Fragment>
  );
};
