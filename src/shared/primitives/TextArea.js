import React from 'react';
import styled from '@emotion/styled';
import { Flex } from '@rebass/emotion';

const TextAreaContainer = styled(Flex)`
  label {
    margin-bottom: 4px;
  }
  textarea {
    padding: 16px;
    font-size: 16px;
    border: 2px solid #e8e8e8;
    border-radius: 4px;
    color: #000;
    transition: all 0.3s ease-in-out;
    outline: none;

    :hover {
      border-color: #94bdf2;
    }
    :focus {
      border-color: #0064e6;
    }
  }
`;

export function TextArea({
  label,
  placeholder,
  onChange,
  value,
  name,
  id,
  rows,
  cols,
  error,
  ...rest
}) {
  return (
    <TextAreaContainer flexDirection="column" {...rest}>
      {label && <label htmlFor={id}>{label}</label>}
      <textarea
        name={name}
        value={value}
        id={id}
        rows={rows}
        cols={cols}
        onChange={onChange}
        placeholder={placeholder}
      />
      {error && (
        <Text color={red} mt={4} fontSize="12px">
          {errorMessage}
        </Text>
      )}
    </TextAreaContainer>
  );
}
