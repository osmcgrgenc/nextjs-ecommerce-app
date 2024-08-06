import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
    uri: 'http://api.limandesign.com/graphql', // Proxy üzerinden yönlendirme
});

const authLink = setContext((_, { headers }) => {
    // Authorization header'ı ekleyin
    return {
        headers: {
            ...headers,
            authorization: localStorage.getItem('token') || '',
        },
    };
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

export default client;
