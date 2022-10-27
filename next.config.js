/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	assetPrefix: `${process.env.NEXT_PUBLIC_BASE_PATH}`,
	basePath: `${process.env.NEXT_PUBLIC_BASE_PATH}`,
	images: {
		loader: "akamai",
		path: `${process.env.NEXT_PUBLIC_BASE_PATH}`,
	},
};

module.exports = nextConfig;
