// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
    allowedDevOrigins: ['172.26.48.1'],
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'https://server.nybff.us/api/:path*', // Proxy to your backend
            },
        ];
    },
}

module.exports = nextConfig;