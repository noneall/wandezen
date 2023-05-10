import tailwindPlugin from 'prettier-plugin-tailwindcss';

// https://github.com/tailwindlabs/prettier-plugin-tailwindcss

export default {
  plugins: [tailwindPlugin],
  tailwindConfig: './tailwind.config.js',
  pluginSearchDirs: false,
};
