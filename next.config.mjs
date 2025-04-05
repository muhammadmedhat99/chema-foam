/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: "web.chema-foam.com",
      search: '',
    }]
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);