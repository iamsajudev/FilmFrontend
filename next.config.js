/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'https://server.nybff.us/api/:path*',
            },
        ];
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'server.nybff.us',
            },
        ],
    },
    // ⚠️ CRITICAL: Remove this line if it exists
    // turbopack: {},
    output: 'standalone',
};

module.exports = nextConfig;