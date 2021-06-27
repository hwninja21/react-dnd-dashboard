const path = require('path');

module.exports = async ({ config }) => {
	config.resolve.modules = [...(config.resolve.modules || []), path.resolve(__dirname, '../src')];
	config.node = {
		fs: 'empty',
		net: 'empty',
		tls: 'empty',
	};
	return config;
};
