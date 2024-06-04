/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    reactCompiler: true,
  },
  reactStrictMode: false,
  images: {
    domains: ['assets.website-files.com'],
  },
}

export default nextConfig
