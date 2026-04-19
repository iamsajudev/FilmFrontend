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

    // ✅ Updated image configuration (replaces deprecated `domains`)
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'server.nybff.us',
                port: '',
                pathname: '/**',
            },
        ],
        unoptimized: false,
    },

    // ❌ Remove this line completely
    // swcMinify: true,

    // ✅ Keep these options
    output: 'standalone',
    compress: true,
};

module.exports = nextConfig;