import type {
  CustomThemeTypings,
  ThemeConfig,
  ThemeDirection,
} from '@chakra-ui/react';
import components from './components';
import foundations, { Foundations } from './foundations';
import semanticTokens, { SemanticTokens } from './semantic-tokens';
import styles from './styles';

const config: ThemeConfig = {
  useSystemColorMode: true,
  initialColorMode: 'system',
  cssVarPrefix: 'chakra', // this is to support partner integration
};

const direction: ThemeDirection = 'ltr';

export type { ThemeDirection, ThemeConfig, Foundations, SemanticTokens };

export const theme: CustomThemeTypings = {
  semanticTokens,
  components,
  config,
  direction,
  styles,
  // layerStyles?: SystemStyleObjectRecord,
  // textStyles?: SystemStyleObjectRecord,

  ...foundations,
};
