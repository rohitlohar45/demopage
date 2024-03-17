const path = require("path");

module.exports = {
	reactStrictMode: true,
	sassOptions: {
		includePaths: [path.join(__dirname, "css")],
	},
	swcMinify: false,
	trailingSlash: true,
	devIndicators: {
		buildActivity: false,
	},
	eslint: {
		ignoreDuringBuilds: false,
	},
};
