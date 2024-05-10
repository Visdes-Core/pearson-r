/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'www.freeiconspng.com',
          },
        ],
      },
    
};

export default nextConfig;
