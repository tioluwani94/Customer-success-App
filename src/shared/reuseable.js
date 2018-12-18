import React from 'react';
import styled from '@emotion/styled';
import { Card } from '@rebass/emotion';

export const Panel = styled(Card)`
padding: 0 16px 16px;
border: 1px solid rgba(0, 0, 0, 0.05);
border-radius: 2px;
background-color: #fff;
box-shadow: 0 1px 1px rgba(0,0,0,.05);
`;

export class OutsideClickHandler extends React.Component {
  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
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
