const styledComponentsPlugin = require('@lukalabs/esbuild-styled-components').default;

exports.plugins = function(plugins) {
  return [styledComponentsPlugin({
    // Regular expression to match current file contents
    // (only process files with "styled-components" in it)
    scMatch: 'styled-components',
    // Regular expression to match current file name
    filter: '(.jsx|.js|.tsx|.ts)$',
    // Regular expression for files to exclude 
    exclude: '/node_modules/',

    // These options are same as in Babel plugin (see https://styled-components.com/docs/tooling#babel-plugin)
    ssr: true,
    displayName: true,
    fileName: true,
    meaninglessFileNames: ['index']  
  }), ...plugins];
}
