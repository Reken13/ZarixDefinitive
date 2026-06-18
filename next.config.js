/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.zarix.site' }],
        destination: 'https://zarix.site/:path*',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
