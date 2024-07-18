/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    basePath: '/inito-assignment',
    output: 'export'
};
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
        unoptimized: true
    },
}

const config = { ...nextConfig, ...imageConfig };
export default config;
