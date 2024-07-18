/** @type {import('next').NextConfig} */
const nextConfig = {};
const imageConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'http',
                hostname: '**',
                port: '',
                pathname: '/**',
            }
        ],
    },
}

const config = { ...nextConfig, ...imageConfig };
export default config;
