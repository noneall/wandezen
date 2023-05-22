import { MainRuntime } from '@teambit/cli';
import { EnvsAspect, EnvsMain } from '@teambit/envs';
import {
  ReactAspect,
  ReactMain,
  UseTypescriptModifiers,
  UseWebpackModifiers,
} from '@teambit/react';
import { ReactChakraEnvAspect } from './react-chakra-env.aspect';
import {
  buildConfigTransformer,
  devConfigTransformer,
} from './typescript/ts-transformer';
import {
  devServerConfigTransformer,
  previewConfigTransformer,
} from './webpack/webpack-transformers';

export class ReactChakraEnvMain {
  static slots = [];

  static dependencies = [ReactAspect, EnvsAspect];

  static runtime = MainRuntime;

  static async provider([react, envs]: [ReactMain, EnvsMain]) {
    const webpackModifiers: UseWebpackModifiers = {
      previewConfig: [previewConfigTransformer],
      devServerConfig: [devServerConfigTransformer],
    };

    const tsModifiers: UseTypescriptModifiers = {
      devConfig: [devConfigTransformer],
      buildConfig: [buildConfigTransformer],
    };

    const ReactChakraEnvEnv = react.compose([
      /**
       * Uncomment to override the config files for TypeScript, Webpack or Jest
       * Your config gets merged with the defaults
       */

      react.useTypescript(tsModifiers), // note: this cannot be used in conjunction with react.overrideCompiler
      react.useWebpack(webpackModifiers),
      react.overrideJestConfig(require.resolve('./jest/jest.config')),

      /**
       * override the ESLint default config here then check your files for lint errors
       * @example
       * bit lint
       * bit lint --fix
       */
      //react.useEslint({
      //  transformers: [
      //  (config) => {
      //    config.setRule('no-console', ['error']);
      //    return config;
      //    }
      //  ]
      //}),

      /**
       * override the Prettier default config here the check your formatting
       * @example
       * bit format --check
       * bit format
       */
      // react.usePrettier({
      //  transformers: [
      //    (config) => {
      //      config.setKey('tabWidth', 2);
      //      return config;
      //    }
      //  ]
      // }),

      /**
       * override dependencies here
       * @example
       * Uncomment types to include version 17.0.3 of the types package
       */
      react.overrideDependencies({
        peers: [
          { name: 'react', version: '18.2.0', supportedRange: '^18.0.0' },
          { name: 'react-dom', version: '18.2.0', supportedRange: '^18.0.0' },
        ],
        dependencies: {},
        devDependencies: {
          '@types/react': '^18.2.6',
          '@types/react-dom': '^18.2.4',
        },
      }),
    ]);
    envs.registerEnv(ReactChakraEnvEnv);
    return new ReactChakraEnvMain();
  }
}

ReactChakraEnvAspect.addRuntime(ReactChakraEnvMain);
