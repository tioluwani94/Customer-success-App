import React from 'react';
import styled from '@emotion/styled';
import { OutsideClickHandler } from '../reuseable';

export const DropdownWrapper = styled.div`
  @media (min-width: 480px) {
    position: relative;
  }

  .Dropdown {
    &-enter {
      opacity: 0.01;
    }

    &-enter-active {
      opacity: 1;
      transition: all 200ms ease-in-out;
    }

    &-exit {
      opacity: 1;
    }

    &-exit-active {
      opacity: 0.01;
      transition: all 200ms ease-in-out;
    }
  }
`;

export const OptionDropdown = styled.div`
  background-color: white;
  border-radius: 4px;
  box-shadow: ${box_shadow.v1};
  position: absolute;
  z-index: 2000;
  right: 0;
  top: 48px;
  padding-top: 8px;
  padding-bottom: 24px;
  width: 300px;

  &:before {
    content: ' ';
    position: absolute;
    display: block;
    top: -7px;
    border: 8px solid #fff;
    border-color: transparent transparent #fff #fff;
    -webkit-transform: translateX(-50%) rotate(135deg);
    transform: translateX(-50%) rotate(135deg);
    -webkit-box-shadow: -2px 2px 3px rgba(57, 73, 76, 0.1);
    box-shadow: -2px 2px 3px rgba(57, 73, 76, 0.1);
    left: auto;
    right: 4px;
  }

  @media (max-width: 480px) {
    top: 74px;
    width: 100%;
    border-radius: 0;
    &:before {
      right: 18px;
    }
  }
`;

class Dropdown extends React.Component {
  state = {
    showDropdown: false,
  };
  toggoleDropdownShow = () => {
    this.setState(({ showDropdown }) => ({
      showDropdown: !showDropdown,
    }));
  };
  render() {
    const { links, children } = this.props;
    const { showDropdown } = this.state;
    return (
      <OutsideClickHandler onClickOutside={this.toggoleDropdownShow}>
        {children}
        <DropdownWrapper>
          <CSSTransition
            in={showDropdown}
            classNames="Dropdown"
            timeout={200}
            unmountOnExit
          >
            <OptionDropdown className="Dropdown">
              {links.map(item => (
                <Option
                  key={item.url}
                  Opt={Opt}
                  icon={item.icon}
                  action={item.action}
                  link={item.url}
                >
                  {item.label}
                </Option>
              ))}
            </OptionDropdown>
          </CSSTransition>
        </DropdownWrapper>
      </OutsideClickHandler>
    );
  }
}
