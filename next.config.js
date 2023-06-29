/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['logos-world.net', 'upload.wikimedia.org', 'raw.githubusercontent.com', 'image.tmdb.org'],
  },
  env: {
    api_key: process.env.API_KEY,
  },
};

module.exports = nextConfig;
