const { override, addBabelPreset } = require('customize-cra')
module.exports = override(
  addBabelPreset('@emotion/babel-preset-css-prop')
)

module.exports = function override(config, env) {
  config.module.rules = config.module.rules.map(rule => {
    if (rule.oneOf instanceof Array) {
      return {
        ...rule,
        oneOf: [
          {
            test: /\.html$/i,
            loader: 'html-loader',
          },
        ]
      }
    }
    return rule;
  });
  return config;
}
