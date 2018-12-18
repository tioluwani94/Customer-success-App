import React from 'react';
import { Flex, Box } from 'rebass';
import { Input } from './primitives/Input';

export class LoginPage extends React.Component {
  render() {
    return (
      <Flex flexDirection="column" alignItems="center" justifyContent="center">
        <LoginForm />
      </Flex>
    );
  }
}

const LoginForm = () => {
  return (
    <form>
      <Flex flexDirection="column">
        <Input
          name="username"
          label="Email"
          type="email"
          placeholder="Email"
          mb="32px"
        />
        <Input
          name="password"
          label="Password"
          type="password"
          placeholder="Password"
          mb="32px"
        />
      </Flex>
    </form>
  );
};
