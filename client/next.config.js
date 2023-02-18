/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    BACKEND_URL: "http://localhost:5000",
  },
  i18n: {
    locales: ["ar"],
    defaultLocale: "ar",
  },
};

module.exports = nextConfig;
