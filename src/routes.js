// In your routes configuration file
const path = require('path');
module.exports = [
	{
		path: '/about/who-we-are',
		component: path.resolve(`src/pages/who-we-are.js`)
	},
	{
		path: '/about/leadership',
		component: path.resolve(`src/pages/leadership.js`)
	},
	{
		path: '/products/vapor',
		component: path.resolve(`src/pages/vapor.js`)
	},
	{
		path: '/products/oral',
		component: path.resolve(`src/pages/oral.js`)
	}
];