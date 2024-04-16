/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
        appDir: true,
        esmExternals: "loose", // required to make Konva & react-konva work
    },
    webpack: (config) => {
        config.externals = [...config.externals, { canvas: "canvas" }];  // required to make Konva & react-konva work
        return config;
    },
    images: {
        domains: ['www.pexels.com', 'images.pexels.com'],
    }
};

export default nextConfig;
