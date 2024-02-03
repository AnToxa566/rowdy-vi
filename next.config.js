/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL: process.env.API_URL,
    APP_URL: process.env.APP_URL,
    ADMIN_LOGIN: process.env.ADMIN_LOGIN,
    ADMIN_PASSWORD: process.env.ADMIN_PASSWORD,
  },
};

module.exports = nextConfig;
