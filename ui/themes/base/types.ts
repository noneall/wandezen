import type {
  SystemStyleInterpolation,
  SystemStyleObject,
} from '@chakra-ui/react';

export type GlobalStyles = {
  global?: SystemStyleInterpolation;
};

export type JSXElementStyles = {
  [K in keyof JSX.IntrinsicElements]?: SystemStyleObject;
};

export type Styles = GlobalStyles & JSXElementStyles;

export type { SystemStyleInterpolation };
