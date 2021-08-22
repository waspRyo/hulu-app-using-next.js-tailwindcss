module.exports = {
  reactStrictMode: true,
  webpack(config) {
    config.resolve.modules.push(__dirname);
    return config;
  },
  images: {
    domains: ["links.papareact.com", "image.tmdb.org"],
  },
};
