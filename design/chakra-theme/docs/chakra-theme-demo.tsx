import {
  Card,
  CardBody,
  CardHeader,
  Center,
  ChakraProvider,
  Grid,
  GridItem,
  Heading,
  Stack,
  Text,
  Wrap,
  WrapItem,
  extendTheme,
  useTheme,
} from '@chakra-ui/react';
import { ThemeTypings } from '@chakra-ui/styled-system/dist/theming.types';
import React, { ReactNode, useMemo } from 'react';
import { theme } from '../theme';

const Container = ({
  heading,
  children,
}: {
  heading: string;
  children: ReactNode;
}) => {
  return (
    <Card>
      <CardHeader>
        <Heading as='h1'>{heading}</Heading>
      </CardHeader>
      <CardBody>{children}</CardBody>
    </Card>
  );
};

const Color = ({ name, value }: { name: string; value: string }) => (
  <Grid
    h='10'
    templateRows='repeat(2, 1fr)'
    templateColumns='56px 1fr'
    gap={2}
  >
    <GridItem
      rowSpan={2}
      colSpan={1}
      bg={name}
      borderRadius='base'
      boxShadow='base'
    />
    <GridItem>{name}</GridItem>
    <GridItem>{value}</GridItem>
  </Grid>
);

const Colors = ({ colors }: Pick<ThemeTypings, 'colors'>) => {
  const colorList = useMemo(() => {
    const res: string[][] = [];
    Object.entries(colors).forEach(([scheme, data]) => {
      if (typeof data === 'string') {
        res.push([scheme, data]);
      } else {
        Object.entries(data).forEach(([modifier, value]) => {
          res.push([`${scheme}.${modifier}`, `${value}`]);
        });
      }
    });

    return res;
  }, [colors]);

  return (
    <Container heading='Colors'>
      <Wrap
        p={8}
        spacing={8}
      >
        {colorList.map(([name, value]) => (
          <WrapItem key={name}>
            <Color
              name={name}
              value={value}
            />
          </WrapItem>
        ))}
      </Wrap>
    </Container>
  );
};

const TextList = ({ fontSizes }: Pick<ThemeTypings, 'fontSizes'>) => {
  return (
    <Container heading='Text'>
      {Object.entries(fontSizes).map(([value]) => (
        <Text
          fontSize={value}
          key={value}
        >
          {value}
        </Text>
      ))}
    </Container>
  );
};

const Shadows = ({ shadows }: Pick<ThemeTypings, 'shadows'>) => {
  return (
    <Container heading='Shadows'>
      <Wrap
        p={8}
        spacing={8}
      >
        {Object.entries(shadows).map(([name]) => (
          <WrapItem key={name}>
            <Center
              shadow={name}
              height={20}
              width={20}
            >
              {name}
            </Center>
          </WrapItem>
        ))}
      </Wrap>
    </Container>
  );
};

const Radius = ({ radii }: Pick<ThemeTypings, 'radii'>) => {
  return (
    <Container heading='Radii'>
      <Wrap
        p={8}
        spacing={8}
      >
        {Object.entries(radii).map(([name]) => (
          <WrapItem key={name}>
            <Center
              shadow={name}
              height={20}
              width={20}
              borderRadius={name}
              boxShadow='xs'
            >
              {name}
            </Center>
          </WrapItem>
        ))}
      </Wrap>
    </Container>
  );
};

const ListDeclarations = () => {
  const { colors, shadows, fontSizes, radii } = useTheme<ThemeTypings>();

  return (
    <Stack>
      <Colors colors={colors} />
      <TextList fontSizes={fontSizes} />
      <Shadows shadows={shadows} />
      <Radius radii={radii} />
    </Stack>
  );
};

const DesignSystem = () => {
  return (
    <ChakraProvider theme={extendTheme(theme)}>
      <ListDeclarations />
    </ChakraProvider>
  );
};

export default DesignSystem;
