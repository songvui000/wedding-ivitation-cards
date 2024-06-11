/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['assets.website-files.com'],
  },
  env: {
    GROOM_NAME: process.env.GROOM_NAME,
    BRIDE_NAME: process.env.BRIDE_NAME,
    WEDDING_DATE: process.env.WEDDING_DATE,
    WEDDING_TIME: process.env.WEDDING_TIME,
    WEDDING_LOCATION: process.env.WEDDING_LOCATION,
  },
}

export default nextConfig
