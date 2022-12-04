module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      "babel-preset-expo",
      [
        "module:metro-react-native-babel-preset",
        {
          unstable_disableES6Transforms: true,
        },
      ],
    ],
    plugins: ["react-native-reanimated/plugin",
    ["module:react-native-dotenv", {
      "moduleName": "@env",
      "path": ".env",
      "blacklist": null,
      "whitelist": null,
      "safe": false,
      "allowUndefined": true
  }]],
  };
};
