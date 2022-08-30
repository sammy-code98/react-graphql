import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import { client } from './ApolloClient/client';
import { ApolloProvider } from '@apollo/client';
import ExchangeRate from './ExchangeRate';

function App() {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider theme={theme}>
        <Box textAlign="center" fontSize="xl">
          <Grid minH="100vh" p={3}>
            <ColorModeSwitcher justifySelf="flex-end" />
            <ExchangeRate />
          </Grid>
        </Box>
      </ChakraProvider>
    </ApolloProvider>
  );
}

export default App;
