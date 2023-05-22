import { Button, ChakraProvider, extendTheme } from '@chakra-ui/react';
import React from 'react';
import { theme } from '../theme';

export const DesignSystem = () => {
  return (
    <ChakraProvider theme={extendTheme(theme)}>
      <Button
        color='telegram.500'
        bg='orange.300'
      >
        button
      </Button>
    </ChakraProvider>
  );
};
