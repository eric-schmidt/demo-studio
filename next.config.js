/** @type {import('next').NextConfig} */
const nextConfig = {
  // Live Preview hits the 2MB when using `unstable_cache`, which we can get
  // around by manually specifying the cache handler.
  // @see https://github.com/vercel/next.js/discussions/48324
  cacheHandler: require.resolve(
    "next/dist/server/lib/incremental-cache/file-system-cache.js"
  ),
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
      },
    ],
  },
};

module.exports = nextConfig;
