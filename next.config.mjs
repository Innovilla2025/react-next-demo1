/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    baseURL: "http://store.your-domain.com", // This represents the base URL for running our frontend project.
    URL: "https://api.your.domain.com/api", // Change only the domain part, keeping "/api" intact
    storageURL: "https://api.your.domain.com", // Change only the laravel primary domain
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.your.domain.com",
      },
      {
        protocol: "http",
        hostname: "127.0.0.1",
      },
      {
        protocol: "http",
        hostname: "localhost",
      },
    ],
  },
};

module.exports = nextConfig;
