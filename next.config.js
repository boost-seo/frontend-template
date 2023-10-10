/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ['src'],
  },

  experimental: {
    typedRoutes: true,
  },

  reactStrictMode: true,
  swcMinify: true,

  // Support Our CDN
  images: {
    domains: ['cdn.realfakeblogs.com', 'images.pexels.com'],
  },
  env: {
    // Dev Only
    API_BACKEND_URL: process.env.API_BACKEND_URL,
    ENVIRONMENT: process.env.ENVIRONMENT,

    // API Config
    API_KEY: process.env.API_KEY,

    // Site Config
    SITE_CONFIG_NAME: process.env.SITE_CONFIG_NAME,
    SITE_CONFIG_TITLE: process.env.SITE_CONFIG_TITLE,
    SITE_CONFIG_DESCRIPTION: process.env.SITE_CONFIG_DESCRIPTION,
    SITE_CONFIG_URL: process.env.SITE_CONFIG_URL,
    SITE_CONFIG_MAIN_URL: process.env.SITE_CONFIG_MAIN_URL,
    SITE_CONFIG_LOGO_URL: process.env.SITE_CONFIG_LOGO_URL,
    SITE_CONFIG_LOGO_ALT: process.env.SITE_CONFIG_LOGO_ALT,
    SITE_CONFIG_FAVICON: process.env.SITE_CONFIG_FAVICON,
    SITE_CONFIG_ACTION_TEXT: process.env.SITE_CONFIG_ACTION_TEXT,
    SITE_CONFIG_ACTION_URL: process.env.SITE_CONFIG_ACTION_URL,
  },

  webpack(config) {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.('.svg')
    );

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: { not: /\.(css|scss|sass)$/ },
        resourceQuery: { not: /url/ }, // exclude if *.svg?url
        loader: '@svgr/webpack',
        options: {
          dimensions: false,
          titleProp: true,
        },
      }
    );

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
};

module.exports = nextConfig;
