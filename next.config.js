/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    // redirect: a로 들어왔을 때 b로 다시 보내준다.
    return [
      {
        // source: "/contact",
        // destination: "/form",
        source: "/old-page/:path*",
        destination: "/new-page/:path*",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    // rewrites: a로 들어왔을 때 b로 다시 보내주지만 url은 바뀌지 않는다.
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`,
      },
      {
        source: "/api/movies/:id",
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${process.env.API_KEY}`,
      },
    ];
  },
};

module.exports = nextConfig;
