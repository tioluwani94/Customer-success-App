/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { Box, Flex, Button, Text, Link } from "@rebass/emotion";
import React from "react";
export const AsLink = ({ to, onClick, children, style, ...rest }) => {
    let WLink = rest.Link || Link;
  
    return Boolean(to) || Boolean(onClick) ? (
      <WLink
        to={to}
        onClick={onClick}
        href={to}
        css={css`
          text-decoration: none;
          color: #000;
          ${style};
          :hover {
            cursor: pointer;
          }
        `}
      >
        {children}
      </WLink>
    ) : (
      children
    );
  };