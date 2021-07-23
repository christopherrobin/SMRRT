// Create react component
import React from 'react';
import { map } from 'lodash';
import Paper from '@material-ui/core/Paper';

const UserTransactions = props => {
	console.log(props.userTransactions.length);
	return (
		<div>
			<Paper>
				{
					map(props.userTransactions, (transaction) => {
						return (
							<div style={{ padding: '1em' }} key={transaction.blockHash}>
								<p>Block Number: {transaction.blockNumber}</p>
								<p>Block Hash: {transaction.blockHash}</p>
								<p>Hash: {transaction.hash}</p>
								<p>Gas: {transaction.gas}</p>
								<p>Gas Price: {transaction.gasPrice}</p>
								<hr />
							</div>
						)
					})
				}
			</Paper>
		</div>
	)
};

export default UserTransactions;
