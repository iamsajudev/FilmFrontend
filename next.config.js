/** @type {import('next').NextConfig} */
const nextConfig = {
    // API Proxy
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'https://server.nybff.us/api/:path*',
            },
        ];
    },

    // Image configuration
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'server.nybff.us',
            },
        ],
        unoptimized: false,
    },

    // For Hostinger VPS
    output: 'standalone',
    
    // Disable turbopack in production
    ...(process.env.NODE_ENV === 'development' && { turbopack: {} }),
    
    // Ensure static assets are served correctly
    assetPrefix: process.env.NODE_ENV === 'production' 
        ? 'https://portal.nybff.us' 
        : '',
};

module.exports = nextConfig;