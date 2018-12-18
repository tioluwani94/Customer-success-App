/** @jsx jsx */
import React from 'react';
import PropTypes from 'prop-types';
import { css, jsx } from '@emotion/core';
import { Flex, Text } from '@rebass/emotion';
import styled from '@emotion/styled';

const StyledSelect = styled(Flex)`
  label {
    margin-bottom: 4px;
  }
  select {
    padding: 0 16px;
    height: 44px;
    font-size: 16px;
    border: 2px solid #e8e8e8;
    background: #fff url('/static/img/arrow.svg') calc(100% - 12px) center
      no-repeat;
    border-radius: 4px;
    color: #000;
    transition: all 0.3s ease-in-out;
    outline: none;
    -webkit-appearance: none;

    :hover {
      border-color: #94bdf2;
    }
    :focus {
      border-color: #0064e6;
    }
  }
`;

export const Select = ({
  label,
  value,
  onChange,
  errorMessage,
  error,
  name,
  id,
  placeholder,
  options,
  formatOptions,
  ...rest
}) => {
  let selectOptions = formatOptions ? formatOptions(options) : options;
  return (
    <StyledSelect flexDirection="column" {...rest}>
      {label && <label htmlFor={id}>{label}</label>}
      <select value={value} onChange={onChange} name={name} id={id}>
        <option value="">{placeholder}</option>
        {selectOptions.map(({ value, label }, i) => (
          <option value={value}>{label}</option>
        ))}
      </select>
      {error && (
        <Text color={red} mt={4}>
          {errorMessage}
        </Text>
      )}
    </StyledSelect>
  );
};

Select.defaultProps = {
  options: [],
};

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
