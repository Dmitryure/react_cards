module.exports = class ExampleWebpackPlugin {
  apply(compiler) {
    compiler.hooks.afterEmit.tap("plugin", (compilation) => {
     
    });
  }
};
