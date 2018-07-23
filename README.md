# eth-dash

> Simple dashboard to monitor Ethereum nodes

While I was patiently waiting for a fresh parity node to sync, I built this little tool
to check on the status of the sync. It's currently under active development as I continue
to play around with my node, I'll probably build out more functionality. The project uses
the [web3](https://github.com/ethereum/web3-js) library to get information from the nodes,
so it should work with both geth and Parity (and eventually [reason-ethereum](https://github.com/figitaki/reason-ethereum)).

## Getting Started

You'll need to have a geth or parity instance running to be able to connect to a live node.
Make sure you also have Node installed on your system to run the server. After you download
the code, run the following commands.

```sh
$ yarn
$ yarn start
```

Now you should be able to start using the dashboard at [localhost:3000](http://localhost:3000).

## Contributing

This is a side project, but if you're interested in suggesting improvements please open an
issue or a pull request and I'll take a look when I get the chance.

## License

MIT
