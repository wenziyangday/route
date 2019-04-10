import React, {Component} from 'react';
import {hot} from 'react-hot-loader';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import {Route, withRouter, Switch} from 'react-router-dom';

import {subRouters} from '../routers';

const Side = withRouter(({history, location, match}) => {
	console.log(JSON.stringify(match));
	return (
		<div className={'side'}>
			<p onClick={() => {
				history.push(`${match.path}/sub`);
				console.log(match.path)
			}}>
				sub
			</p>
			<p onClick={() => history.push(`${match.path}/sub2`)}>
				sub2
			</p>
		</div>
	);
});


class Layouts extends Component {
	render() {
		return (
			<div className={'layouts'}>
				<Side/>

				<TransitionGroup>
					<CSSTransition key={this.props.location.key} classNames={'fade'} timeout={300}>
						<Switch location={this.props.location}>
							{
								subRouters.map((route, index) => {
										console.log(`${JSON.stringify(this.props)}`);

										return <Route key={index} exact path={`${this.props.match.path + route.path}`}
										              component={route.component}/>
									}
								)
							}
						</Switch>
					</CSSTransition>
				</TransitionGroup>
			</div>
		);
	}
}

export default hot(module)(Layouts);
