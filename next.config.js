/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  nextConfig,
  target: process.env.NODE_ENV !== 'production' ? 'server' : 'serverless',
  dontAutoRegisterSw: true,
  generateSw: false,
  devSwSrc: './public/sw.js',
  workboxOpts: {
    swSrc: './public/sw.js',
    swDest: './public/service-worker.js',
  },
  images: {
    disableStaticImages: true,
  },
  webpack(config) {
    config.module.rules.push(
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    );

    return config;
  },
};
