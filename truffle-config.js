const path = require("path");

module.exports = {
	contracts_build_directory: path.join(__dirname, "client/src/contracts"),
	networks: {
		develop: {
			host: '127.0.0.1',
			port: 7545,
			network_id: '5777'
		}
	},
	compilers: {
		solc: {
			// version: '^0.4.19'
		}
	},
    solc: {
    // Turns on the Solidity optimizer. For development the optimizer's
    // quite helpful, just remember to be careful, and potentially turn it
    // off, for live deployment and/or audit time. For more information,
    // see the Truffle 4.0.0 release notes.
    //
    // https://github.com/trufflesuite/truffle/releases/tag/v4.0.0
		optimizer: {
			enabled: true,
			runs: 200
		}
	}
}
