const path = require('path');
const predeterminedRoute = path.resolve(__dirname, 'src');

module.exports = {
	webpack: {
		alias: {
			'@components-Project': `${predeterminedRoute}/components`,
			'@containers-Project': `${predeterminedRoute}/Containers`,
			'@pages-Project': `${predeterminedRoute}/pages`,
			'@redux-Project': `${predeterminedRoute}/redux`,
			'@routes-Project': `${predeterminedRoute}/routes`,
			'@styles-Project': `${predeterminedRoute}/styles`,
			'@constants-Project': `${predeterminedRoute}/constants`,
			'@assets-Project': `${predeterminedRoute}/assets`,
			'@gateway-Project': `${predeterminedRoute}/gateway`,
			'@api-Project': `${predeterminedRoute}/api/module`,
			'@helpers-Project': `${predeterminedRoute}/utils/Helpers/helpers`,
		}
	},
	jest: {
		configure: {
			moduleNameMapper: {
				'^@(.*)$': '<rootDir>/src$1'
			}
		}
	}
};