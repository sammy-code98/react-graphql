import React from 'react';
import {
  ChakraProvider,
  Box,
  Grid,
  Text,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { client } from './ApolloClient/client';
import { ApolloProvider } from '@apollo/client';
import ExchangeRate from './component/ExchangeRate';

function App() {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider theme={theme}>
        <Box textAlign="center" fontSize="xl">
          <Grid minH="100vh" p={3}>
            <ColorModeSwitcher justifySelf="flex-end" />
            <Text>This is the current Dollar Exhange Rate as against other currency</Text>
            <ExchangeRate />
          </Grid>
        </Box>
      </ChakraProvider>
    </ApolloProvider>
  );
}

export default App;
