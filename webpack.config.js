module.exports = {
  entry: [
    // Set up an ES6-ish environment
    'babel-polyfill',
    "./index.js",
  ],
  output: {
    path: __dirname,
    filename: "./dist/bundle.js"
  },
  module: {
    preLoaders:[
      {
        loader: "eslint-loader",
        test: /\.js$/,
        exclude: /node_modules/,
      }
    ],
		loaders: [
			{
				loader: "babel-loader",

				// Skip any files outside of your project's `src` directory
				//include: [
				
				//],

				// Only run `.js` and `.jsx` files through Babel
				test: /\.jsx?$/,

				// Options to configure babel with
				query: {
					plugins: ['transform-runtime'],
					presets: ['es2015']
				},
        exclude: /node_modules/,
			}
		],
  },
  eslint: {
    configFile: "./.eslintrc",
  }
};
