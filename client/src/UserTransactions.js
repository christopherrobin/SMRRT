// Create react component
import React from 'react';
import { map } from 'lodash';

const UserTransactions = props => {
	// console.log(props.userTransactions);
	const { userTransactions } = props;
	console.log(userTransactions);
	return (
		<div>
			<h2 style={{ textAlign: 'left'}}>User Transactions</h2>
			{
				map(userTransactions, (transaction, key) => {
					console.log(transaction);
				})
			}
			{
				userTransactions.map(data => { 
					return (
						<div key={data.id}>
							<p>{data.description}</p>
							<p>{data.amount}</p>
						</div>
					);
				}
				)
			}
		</div>
	)
};

export default UserTransactions;