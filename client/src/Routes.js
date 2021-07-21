import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import App from "./App";

export default function Routes() {
	return (
		<Router>
			<div>
				<Switch>
					<Route exact path="/">
						<App />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}
