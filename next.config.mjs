import withSerwistInit from '@serwist/next'

import BundleAnalyzer from '@next/bundle-analyzer'

const withBundleAnalyzer = BundleAnalyzer({
	enabled: false,
})

const withSerwist = withSerwistInit({
	// Note: This is only an example. If you use Pages Router,
	// use something else that works, such as "service-worker/index.ts".
	swSrc: 'src/app/sw.ts',
	swDest: 'public/sw.js',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'standalone',
	images: {
		dangerouslyAllowSVG: true,
		contentDispositionType: 'attachment',
		contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'storage.popp.club',
			},
		],
	},
	experimental: {
		
		swcPlugins: [['@lingui/swc-plugin', {}]],
		staleTimes: {
			dynamic: 3600,
			static: 60 * 24 * 30,
		},
	},
	productionBrowserSourceMaps: false,
	eslint: {
		ignoreDuringBuilds: true,
	},
	compiler: {
		styledComponents: false,
		removeConsole: process.env.NEXT_PUBLIC_APP_ENV === 'prd',
	},
	typescript: {
		tsconfigPath: process.env.NEXT_PUBLIC_APP_ENV === 'prd' ? `./tsconfig.prd.json` : `./tsconfig.json`,
		ignoreBuildErrors: true,
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.po$/,
			use: {
				loader: '@lingui/loader',
			},
		})
		config.module.rules.push({
			test: /\.svg$/,
			use: ['@svgr/webpack'],
		})
		return config
	},
	// to use lingui macros
	experimental: {
		swcPlugins: [['@lingui/swc-plugin', {}]],
	},
}

export default withBundleAnalyzer(withSerwist(nextConfig))
