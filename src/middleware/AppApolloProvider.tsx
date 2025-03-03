import React, { FunctionComponent, PropsWithChildren } from 'react';

import { ApolloClient, InMemoryCache, ApolloProvider, from, ApolloLink } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { createNetworkStatusNotifier } from 'react-apollo-network-status';
import createUploadLink from 'apollo-upload-client/createUploadLink.mjs';

const unauthorizedInterceptor = onError(({ networkError }) => {
    console.log('Unauthorized');
})
const { useApolloNetworkStatus, link: networkStatusNotifierLink } = createNetworkStatusNotifier();
// eslint-disable-next-line no-restricted-globals
const uploadLink: ApolloLink = networkStatusNotifierLink.concat(createUploadLink({uri: `${location.protocol}//${location.host}/graphql`}));
// const uploadLink = createUploadLink({uri: `${location.protocol}//${location.host}/graphql`});

const link = from([uploadLink, unauthorizedInterceptor])

const apolloClient = new ApolloClient({
    link: link,
    cache: new InMemoryCache(),
  });

  export const globalPendingApolloMutations = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const status = useApolloNetworkStatus();
    return status.numPendingMutations;
  }

  export const AppApolloProvider: FunctionComponent<PropsWithChildren<unknown>> = ({ children }) => {
    return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
  }
