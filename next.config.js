const withPWA = require('next-pwa');
const isProd = process.env.NODE_ENV === 'production';
const securityHeaders = [
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Content-Security-Policy',
    value: 'upgrade-insecure-requests',
  },
];

module.exports = withPWA({
  target: serverless,
  assetPrefix: isProd ? 'https://nom.nomcdn.xyz' : '',
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
  },
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
  poweredByHeader: false,
});
