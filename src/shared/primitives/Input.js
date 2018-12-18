/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { Box, Flex, Text } from '@rebass/emotion';
import React from 'react';

export const Input = ({
  label,
  value,
  onChange,
  errorMessage,
  error,
  name,
  id,
  type,
  placeholder,
  ...rest
}) => {
  return (
    <Flex
      css={css`
        label {
          margin-bottom: 4px;
        }
      `}
      flexDirection="column"
      {...rest}
    >
      <label htmlFor={id}>{label}</label>
      <input
        value={value}
        name={name}
        onChange={onChange}
        type={type}
        id={id}
        placeholder={placeholder}
      />
      {error && (
        <Text color={red} mt={4}>
          {errorMessage}
        </Text>
      )}
    </Flex>
  );
};
