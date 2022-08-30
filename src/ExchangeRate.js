import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Box, Text } from '@chakra-ui/react';

// make the graphql query here
const EXHANGE_RATES = gql`
  query GetExhangeRate {
    rates(currency: "AUD") {
      currency
      rate
    }
  }
`;
export default function ExchangeRate() {
  const { data, loading, error } = useQuery(EXHANGE_RATES);

  //   error boundaries
  if (loading) {
    return <Box>Loading....</Box>;
  }
  if (error) {
    return <Box>An error occured ..</Box>;
  }

  //   return fetched data
  return data.rates.map(({ currency, rate }) => (
    <Box key={currency}>
        <Text>{currency} : {rate}</Text>
    </Box>
  ));
}
