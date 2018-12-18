/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { Box, Flex, Text } from '@rebass/emotion';

const StyledInput = styled(Flex)`
  label {
    margin-bottom: 4px;
  }
  input {
    padding: 0 16px;
    height: 40px;
    font-size: 16px;
    border: 2px solid #e8e8e8;
    border-radius: 4px;
    color: #000;
    transition: all 0.3s ease-in-out;
    outline: none;

    :hover {
      border-color: #94BDF2;
    }
    :focus {
      border-color: #0064E6;
    }
  }
`;

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
  checked,
  ...rest
}) => {
  return (
    <StyledInput flexDirection="column" {...rest}>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        value={value}
        name={name}
        onChange={onChange}
        type={type}
        id={id}
        placeholder={placeholder}
        checked={checked}
      />
      {error && (
        <Text color={red} mt={4}>
          {errorMessage}
        </Text>
      )}
    </StyledInput>
  );
};
