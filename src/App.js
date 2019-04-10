import React, {Component} from 'react';
import {hot} from 'react-hot-loader';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {rootRouter} from './routers';

import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Router>
					<Switch>
						{
							rootRouter.map((route, index) => {
								return (
									<Route key={index}
									       path={route.path}
									       exact={route.exact}
									       component={route.component}/>
								)
							})
						}
					</Switch>
				</Router>
			</div>
		);
	}
}

export default hot(module)(App);
