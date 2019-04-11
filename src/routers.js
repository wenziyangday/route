import React from 'react';
import {Redirect} from 'react-router-dom';
import Loadable from 'react-loadable';

const loadable = (filename) => Loadable(
	{
		loader: () => import('./view/' + filename),
		loading: () => <div></div>
	}
);

const rootRouter = [
	{
		path: '/',
		exact: true,
		component: () => <Redirect to={'/admin'}/>
	},
	{
		path: '/admin',
		// exact: true,
		component: Loadable({
			loader: () => import('./view/Layouts'),
			loading: () => (''),
		})
	},
	{
		path: '/about',
		component: loadable('About')
	},
	{
		path: '/login',
		component: loadable('Login')
	},
	{
		path: '/products',
		component: loadable('Products')
	},
	{
		path: '*',
		component: loadable('404')
	}
];

const subRouters = [
	{
		path: '/sub',
		component: loadable('Sub')
	},
	{
		path: '/sub2',
		component: loadable('Sub2')
	},
];

export {
	rootRouter,
	subRouters
};
