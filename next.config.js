/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	swcMinify: true,
	// experimental: { appDir: true },
	typescript: {
		// ignoreBuildErrors: true
	},
};

module.exports = nextConfig;
