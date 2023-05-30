import type { Pseudos, SemanticValue } from '@chakra-ui/react';
import type { Foundations } from './foundations';

/**
 * refer only _dark, _light, _rtl, _ltr and _mediaReduceMotion in semantic tokens
 * selectors like _focus, _hove should be defined at component level
 * https://chakra-ui.com/docs/styled-system/semantic-tokens#conditional-tokens
 */
export type SemanticTokens = Partial<
  Record<keyof Foundations, Record<string, SemanticValue<keyof Pseudos>>>
>;

const semanticTokens: SemanticTokens = {};

export default semanticTokens;
