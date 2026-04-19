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
    
    // Required for Next.js 16
    turbopack: {},
};

module.exports = nextConfig;