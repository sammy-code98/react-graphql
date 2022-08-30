import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Box } from '@chakra-ui/react';

// make the graphql query here
const EXHANGE_RATES = gql`
  query GetExhangeRate {
    rates(currency: "USD") {
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
    return <Box>{error}</Box>;
  }

  //   return fetched data
  return data.rates.map(({ currency, rate }) => (
    <Box key={currency}>
      <Box border="1px" borderColor="gray.200" margin="8px" padding="2px">
        {currency} : {rate}
      </Box>
    </Box>
  ));
}
