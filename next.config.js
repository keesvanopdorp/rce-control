/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    swcMinify: true,
    poweredByHeader: false,
};

module.exports = nextConfig;
