const { injectBabelPlugin } = require('react-app-rewired');

const rootImportConfig = [
  "root-import",
  {
    rootPathPrefix:"",
    rootPathPrefix:"client/src",
  }
]

module.exports = function override(config, env) {
config = injectBabelPlugin(
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }],
    config,
  );
  return config;
};