/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	assetPrefix: "/dis-nord-landing",
	basePath: "/dis-nord-landing",
	images: {
		loader: "akamai",
		path: "/dis-nord-landing",
	},
};

module.exports = nextConfig;
