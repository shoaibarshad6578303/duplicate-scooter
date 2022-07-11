/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
}

// module.exports = nextConfig

module.exports = {
  images: {
    // local
    domains: ['127.0.0.1'],
    // server
    // domains: ['scooterpanel'],
  },
}
