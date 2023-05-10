import preset from './preset';
import type { Config } from 'tailwindcss';

const defaultConfig = {
  content: [...preset.content],
};

/** @type {import('tailwindcss').Config} */
export default (config: Config) =>
  ({
    // use the basic preset to get the files from the workspace
    ...defaultConfig,
    ...config,
  } as Config);
