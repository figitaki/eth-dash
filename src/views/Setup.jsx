import React from "react";

import { Flex, Text, Button, TextField, Spacer } from "../components";

export class Setup extends React.Component {
  state = {
    provider: ""
  };

  render() {
    const { onConnect } = this.props;
    const { provider } = this.state;

    return (
      <Flex height="100vh" align="center" justify="center">
        <Text size="large">Configure RPC</Text>
        <Spacer />
        <Text>Which address should web3 connect to?</Text>
        <Spacer size="1.5rem" />
        <Flex width="500px" row>
          <TextField
            value={provider}
            placeholder="http://localhost:8545"
            onChange={s => this.setState({ provider: s })}
          />
          <Spacer width="1rem" />
          <Button primary onClick={() => onConnect(provider)}>
            Connect
          </Button>
        </Flex>
      </Flex>
    );
  }
}

export default Setup;
