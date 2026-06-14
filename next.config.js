/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',        // Static HTML export for GitHub Pages
  trailingSlash: true,     // Required for GitHub Pages routing
  images: {
    unoptimized: true,     // Static export doesn't support Next/Image optimization
  },
  // If deploying to a subdirectory (e.g. github.com/username/portfolio),
  // uncomment and set the repo name:
  basePath: '/portfolio',
  assetPrefix: '/portfolio/',
};

module.exports = nextConfig;
