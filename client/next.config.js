/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
  // env: {
  //   DB_URI: "",
  //   SECRET: "",
  // },
};

module.exports = nextConfig;
