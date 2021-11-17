const path = require('path');

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@routes': path.resolve(__dirname, 'src/routes'),
      '@store': path.resolve(__dirname, 'src/store'),
      '@shared/styles': path.resolve(__dirname, 'src/shared/styles'),
      '@shared/assets': path.resolve(__dirname, 'src/shared/assets'),
      '@shared/hooks': path.resolve(__dirname, 'src/shared/hooks'),
      '@shared/services': path.resolve(__dirname, 'src/shared/services'),
      '@shared/utils': path.resolve(__dirname, 'src/shared/utils'),
      '@shared/types': path.resolve(__dirname, 'src/shared/types'),
    },
  };

  return config;
};
