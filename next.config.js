/** @type {import('next').NextConfig} */
const nextConfig = {
  // API Proxy
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://server.nybff.us/api/:path*",
      },
    ];
  },

  // Static export configuration
  output: "export",
  images: {
    unoptimized: true, // Required for static export
  },
  trailingSlash: true,

  // Disable server features for static export
  distDir: "out",
};

module.exports = nextConfig;
