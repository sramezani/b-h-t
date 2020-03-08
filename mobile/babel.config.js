module.exports = {
  presets: [
    "module:metro-react-native-babel-preset"
  ],
  plugins: [
    ["module-resolver", {
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        root: ["."],
        alias: {
          "@component": "./component"
        }
    }]    
  ],
  env: {
    test: {
      plugins: [
        'transform-export-extensions',
        'istanbul'
      ],
      only: [
        "./**/*.js",
        "node_modules/jest-runtime"
      ]
    },
    production: {
      "plugins": ["transform-remove-console"]
    }
  }

};