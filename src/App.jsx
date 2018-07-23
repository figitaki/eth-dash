import React, { Component } from "react";
import Web3 from "web3";

import Setup from "./views/Setup";
import SyncStatus from "./views/SyncStatus";

class App extends Component {
  state = {
    connected: false,
    status: {}
  };

  constructor() {
    super();
    this.handleConnect = this.handleConnect.bind(this);
  }

  handleConnect = providerUri => {
    let provider;
    if (providerUri.slice(0, 2).toLowerCase() === "ws")
      provider = new Web3.providers.WebsocketProvider(providerUri);
    else provider = new Web3.providers.HttpProvider(providerUri);
    this.web3 = new Web3(provider);
    this.setState({ connected: true });
    this.handleReload();
  };

  handleReload = () => {
    this.web3.eth
      .isSyncing()
      .then(status => this.setState({ status }))
      .catch(err => {
        console.error(err);
        this.setState({ connected: false, status: {} });
      });
  };

  render() {
    const { connected, status } = this.state;

    if (!connected) return <Setup onConnect={this.handleConnect} />;

    return <SyncStatus status={status} onReload={this.handleReload} />;
  }
}

export default App;
