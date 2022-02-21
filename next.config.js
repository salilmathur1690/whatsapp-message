const config = {
	reactStrictMode: true,
	poweredByHeader: false,
	async headers() {
		return [
			{
				source: '/(.*)',
				headers: [
					{
						key: 'X-Powered-By',
						value: 'Yobee',
					},
				],
			},
		];
	},
};

module.exports = config;
