import type { WebpackConfigMutator } from '@teambit/webpack';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import postcssImport from 'postcss-import';
import tailwindcss, { Config } from 'tailwindcss';

type TailwindOptions = {
  /**
   * apply the Tailwind CDN to the HTML template
   * @default false
   * @see https://tailwindcss.com/docs/installation/play-cdn
   */
  cdn?: boolean;
  /**
   * Custom Tailwind config
   * If a string is provided, it will be used as the path to the config file
   * @default tailwind.config.js
   */
  config: Config | string;

  isProd?: boolean;
};

/**
 * Webpack transformer for Tailwind CSS
 */
export function webpackTransformer({ cdn, config, isProd }: TailwindOptions) {
  return (configMutator: WebpackConfigMutator) => {
    configMutator.addPostCssPlugins(
      [
        postcssImport,
        tailwindcss(config),
        autoprefixer,
        isProd && cssnano,
      ].filter(Boolean),
    );

    if (cdn) {
      configMutator.addElementToHtmlTemplate({
        parent: 'head',
        position: 'append',
        tag: 'script',
        attributes: {
          src: 'https://cdn.tailwindcss.com/',
        },
      });

      configMutator.addElementToHtmlTemplate({
        parent: 'head',
        position: 'append',
        tag: 'script',
        content: `tailwind.config = ${JSON.stringify(config, null, 2)}`,
      });
    }

    return configMutator;
  };
}
