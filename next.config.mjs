/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'res.cloudinary.com',
            port: '',
            pathname: '/dd6zbmehe/image/upload/v1704139362/**',
          },
        ],
      },
};

export default nextConfig;
