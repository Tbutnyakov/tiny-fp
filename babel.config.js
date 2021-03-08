const testConfig = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript',
  ],
};

module.exports = api => {
  if (api.env('test')) return testConfig;
};
