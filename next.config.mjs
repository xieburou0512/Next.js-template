import withSerwistInit from '@serwist/next'

const withSerwist = withSerwistInit({
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
  // Turbopack 配置已移到顶层
  turbopack: {
    rules: {
      // 修复：使用正确的 loaders 配置语法
      '*.po': {
        loaders: ['@lingui/loader'],
        as: '*.js',
      },
    },
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
}

const getNextConfig = () => {
  let config = nextConfig
  
  // 只在需要时添加 bundle analyzer
  if (process.env.ANALYZE === 'true') {
    const withBundleAnalyzer = require('@next/bundle-analyzer')({
      enabled: true,
    })
    return withBundleAnalyzer(withSerwist(config))
  }
  
  return withSerwist(config)
}

export default getNextConfig()