// import { ApolloClient, ApolloLink, InMemoryCache } from "@apollo/client";
// import { RestLink } from "apollo-link-rest";
import { ApolloClient, InMemoryCache } from '@apollo/client';

// const httpLink = new HttpLink({
//     uri: "https://48p1r2roz4.sse.codesandbox.io",

// })

// export const client = new ApolloClient({
//     cache : new InMemoryCache(),
//     link: ApolloLink.from([httpLink])

// })
export const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
  cache: new InMemoryCache(),
});
