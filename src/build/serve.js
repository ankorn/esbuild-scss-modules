// const { sassPlugin } = require("esbuild-sass-plugin");
// const cssModulesPlugin = require("esbuild-css-modules-plugin");

const { ScssModulesPlugin } = require("esbuild-scss-modules-plugin");

const port = 5200;

require("esbuild")
  .serve(
    {
      servedir: "public",
      port,
    },
    {
      entryPoints: ["src/index.tsx"],
      bundle: true,
      sourcemap: true,
      outfile: "./public/index.js",
      loader: {
        ".png": "dataurl",
        ".woff": "dataurl",
        ".woff2": "dataurl",
        ".eot": "dataurl",
        ".ttf": "dataurl",
        ".svg": "dataurl",
      },
      // plugins: [sassPlugin(), cssModulesPlugin()],
      plugins: [
        ScssModulesPlugin({
          cssCallback: (css) => console.log(css),
        }),
      ],
    }
  )
  .then(() => {
    console.log(`Listening on: ${port}`);
  })
  .catch(() => process.exit(1));
