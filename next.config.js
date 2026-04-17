// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
    allowedDevOrigins: ['172.26.48.1'],
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'https://gray-tapir-174741.hostingersite.com/api/:path*', // Proxy to your backend
            },
        ];
    },
}

module.exports = nextConfig;