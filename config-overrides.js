const {override, addWebpackAlias} = require('customize-cra');
const path = require('path');

module.exports = {
    webpack: override(
      addWebpackAlias({
          '@app': path.resolve(__dirname, 'src')
      })
    )
};