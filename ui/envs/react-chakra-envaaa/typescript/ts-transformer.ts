import {
  TsConfigTransformer,
  TypescriptConfigMutator,
} from '@teambit/typescript';
import * as path from 'path';

const tsConfig = require('./tsconfig.json');
const devTsConfig = require('./tsconfig.dev.json');

export const commonTransformer: TsConfigTransformer = (
  config: TypescriptConfigMutator,
) => {
  const newConfig = config.addTypes([path.join(__dirname, 'styles.d.ts')]);
  // Some examples of other built in mutator functions:
  //newConfig.addExclude(['someExclude']);
  //newConfig.setCompileJs(true)
  return newConfig;
};

/**
 * Transformation for the dev config only
 * @param config
 * @param context
 * @returns
 */
export const devConfigTransformer: TsConfigTransformer = (
  config: TypescriptConfigMutator,
) => {
  const newConfig = commonTransformer(config, {});
  newConfig.mergeTsConfig(devTsConfig);
  return newConfig;
};

/**
 * Transformation for the build only
 * @param config
 * @param context
 * @returns
 */
export const buildConfigTransformer: TsConfigTransformer = (
  config: TypescriptConfigMutator,
) => {
  const newConfig = commonTransformer(config, {});
  newConfig.mergeTsConfig(tsConfig);
  return newConfig;
};
