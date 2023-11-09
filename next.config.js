/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "https://portfolio-jieun.vercel.app",
          },
          {
            key: "Access-Control-Allow-Origin",
            value: "http://localhost:3000",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
