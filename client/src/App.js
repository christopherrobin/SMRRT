import React, { useState, useEffect } from 'react';
import SimpleStorageContract from "./contracts/SimpleStorage.json";
import getWeb3 from "./getWeb3";

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

import truffleLogo from "./truffle-logo.svg";

import "./App.scss";

const App = () => {
  const [accounts, setAccounts] = useState([]);
  const [storageValue, setStorageValue] = useState(0);
  // const [web3, setWeb3] = useState([]);
  const [contract, setContract] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Create an scoped async function in the hook
    async function initializeState() {
		try {
			// Get network provider and web3 instance.
			const web3 = await getWeb3();

			// Use web3 to get the user's accounts.
			const accounts = await web3.eth.getAccounts();

			// Get the contract instance.
			const networkId = await web3.eth.net.getId();
			const deployedNetwork = SimpleStorageContract.networks[networkId];
			const instance = new web3.eth.Contract(
				SimpleStorageContract.abi,
				deployedNetwork && deployedNetwork.address,
			);

			// Set web3, accounts, and contract to the state, and then proceed with an
			// example of interacting with the contract's methods.
			setAccounts(accounts);
			// setWeb3(web3);
			setContract(instance);
		} catch (error) {
			// Catch any errors for any of the above operations.
			console.info(
				`Failed to load web3, accounts, or contract.`,
			);
			console.error(error);
		}
    }
    // Execute the created function directly
    initializeState();
  }, []);

	const runExample = async () => {
		setLoading(true);
		// const { accounts, contract } = state;

		// Stores a given value, 5 by default.
		await contract.methods.set(5).send({ from: accounts[0] });

		// Get the value from the contract to prove it worked.
		const response = await contract.methods.get().call();

		// Update state with the result.
		setStorageValue(response);
		setLoading(false);
	};

	return (
			<div className="App">

				<div>
					<img alt="Truffle Logo" style={{ maxWidth: '5em', marginTop: '1em' }} src={truffleLogo} />
				</div>
				
				<p style={{ marginTop: '0.5em', color: '#666' }}>
					<em>Your Truffle Box is installed and ready.</em> &#128640;
				</p>
				
				<Paper style={{ margin: '1.5em auto', padding: '2em 1em 1em 1em', maxWidth: '1200px', width: '90%' }}>
					{
						accounts[0] ? <div>Welcome back, <span className='highlight'>{accounts[0]}</span></div> : null
					}
					<hr />
					<h2>Smart Contract Example</h2>
					<p>On page load the <strong>storageValue</strong> will be <strong>0</strong>. Clicking the button
					below will run the example function in <strong>App.js</strong>. Confirm the transaction in MetaMask
					and if successful the <strong>storageValue</strong> will be <strong>5</strong>.</p>
				<div>
					<Button
						style={{ margin: '1em 0 2em 0', width: '15em'}}
						variant="outlined"
						color="primary"
						size="large"
						onClick={runExample}
						disableElevation
					>
						{
							loading ?
								<CircularProgress /> : <span><strong>Run Example</strong></span>
						}
					</Button>
				</div>
				<div>
					The stored value is
					<div className="background-circle">{storageValue}</div>
				</div>
			</Paper>

			</div>
	);
}

export default App;
