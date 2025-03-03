/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/render-result-naming-convention */
import React from 'react';
import { render } from '@testing-library/react';
import { AppApolloProvider } from './AppApolloProvider';

jest.mock('@apollo/client', () => ({
    ApolloClient: class {
        constructor(public mockApolloConfig: Record<string, unknown>) {}
    },
    ApolloLink: class {
        constructor(public mockLinkConfig: Record<string, unknown>) {}
    },
    ApolloProvider: 'mock-apollo-provider',
    InMemoryCache: class {
        constructor(public mockCacheConfig: Record<string, unknown>) {}
    },
    from: (middlewares: []) => middlewares,
    gql: () => 'graphql'
}));

jest.mock('react-apollo-network-status', () => ({
    createNetworkStatusNotifier: jest.fn(() => ({
        link: {
            concat: jest.fn(_props => 'test-link')
        }
    }))
}));

// jest.mock('apollo-upload-client/createUploadLink.mjs', () => ({
//     createUploadLink: () => 'link'
// }));

jest.mock('apollo-upload-client/createUploadLink.mjs', () => ({
    __esModule: true,
  default: jest.fn(),
}))

describe('testing app apollo provider', () => {
    it('should create apollo client with configuration', () => {
        const component = render(
            <AppApolloProvider>
                <div>
                    children
                </div>
            </AppApolloProvider>
        );
        expect(component.container.firstChild).toMatchSnapshot();
    })
})