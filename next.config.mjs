/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    reactStrictMode: true
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
    },
}

const config = { ...nextConfig, ...imageConfig };
export default config;
