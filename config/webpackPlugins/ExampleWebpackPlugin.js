module.exports = class ExampleWebpackPlugin {
  apply(compiler) {
    compiler.hooks.done.tap("plugin", (compilation) => {
      console.log(compilation);
      console.log("work done");
    });
  }
};
