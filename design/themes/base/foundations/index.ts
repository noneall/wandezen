import typography from '../typography';
import borders from './borders';
import breakpoints from './breakpoints';
import colors from './colors';
import radii from './radius';
import shadows from './shadows';
import sizes from './sizes';
import { spacing } from './spacing';
import transition from './transition';
import zIndices from './z-index';

const foundations = {
  borders,
  breakpoints,
  colors,
  radii,
  shadows,
  sizes,
  space: spacing,
  transition,
  zIndices,

  ...typography,
};

export default foundations;

export type Foundations = typeof foundations;
